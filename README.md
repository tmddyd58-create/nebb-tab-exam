# NEBB TAB CP Practice Engine - Oracle Cloud VM & GitHub 연동 가이드

본 가이드는 **GitHub**를 이용한 소스 코드 관리/배포 및 **Oracle Cloud VM**을 활용한 Node.js 백엔드 데이터베이스 서버 설정 방법을 안내합니다.

## 전체 아키텍처 개요
1. **GitHub (버전 관리 및 배포)**:
   - 프론트엔드 정적 파일(`index.html`, `style.css`, `questions_data.js`)과 백엔드 API 서버(`server.js`) 코드를 중앙에서 관리합니다.
   - 로컬 PC 또는 Oracle VM에서 항상 최신 코드를 `git pull`하여 구동할 수 있습니다.
2. **Oracle Cloud VM (서버 및 데이터베이스)**:
   - Node.js Express 백엔드 서버를 구동(3000번 포트)하여 회원 데이터 및 개개인의 시험 이력, 오답 노트, 북마크 상태를 JSON 파일 데이터베이스에 저장합니다.
   - 프론트엔드 정적 파일도 동일한 3000번 포트에서 함께 서빙하므로, 별도의 SSL 도메인 설정 없이도 `http://<Oracle-VM-IP>:3000`으로 안전하게 통합 접속할 수 있습니다.

---

## 1단계: Oracle Cloud VM 방화벽 설정 (3000번 포트 허용)
Oracle VM에서 백엔드 서버를 외부에서 정상적으로 서비스하기 위해서는 3000번 포트가 오픈되어 있어야 합니다.

### 1. Oracle Cloud 웹 콘솔 설정 (Ingress Security List)
1. Oracle Cloud 콘솔에 로그인한 뒤, 해당 인스턴스의 상세 페이지로 이동합니다.
2. 인스턴스가 속한 **Virtual Cloud Network (VCN)** 링크를 클릭합니다.
3. 왼쪽 메뉴에서 **Security Lists**를 클릭하고, 사용 중인 **Default Security List**를 선택합니다.
4. **Add Ingress Rules**를 클릭하고 아래와 같이 규칙을 추가합니다:
   - **Source Type**: `CIDR`
   - **Source CIDR**: `0.0.0.0/0` (모든 IP 허용)
   - **IP Protocol**: `TCP`
   - **Source Port Range**: (비워둠)
   - **Destination Port Range**: `3000`
   - **Description**: `NEBB TAB CP Express Backend Server`

### 2. OS 내부 방화벽 설정 (Oracle Linux / RHEL / CentOS 기준)
VM 터미널에 SSH로 접속하여 아래 명령어를 실행해 3000번 포트를 허용합니다:
```bash
# firewalld 방화벽에 3000번 포트 허용 추가
sudo firewall-cmd --permanent --add-port=3000/tcp

# 방화벽 재로드
sudo firewall-cmd --reload
```

---

## 2단계: VM에서 프로젝트 복사 및 실행

### 1. Git 설치 및 프로젝트 복제
Oracle VM 터미널에서 아래 명령을 통해 프로젝트를 복제합니다:
```bash
# Git 및 Node.js 설치 (미설치된 경우)
sudo dnf install -y git nodejs

# GitHub에서 프로젝트 복제
git clone <본인의 GitHub 저장소 URL>
cd <저장소 폴더명>
```

### 2. 의존성 패키지 설치
백엔드 구동에 필요한 라이브러리(`express`, `cors`)를 설치합니다:
```bash
npm install
```

### 3. 백엔드 서버 백그라운드 무중단 실행
터미널 세션을 종료해도 서버가 계속 실행되도록 설정합니다.

#### 방법 A: `nohup` 사용 (추가 설치 불필요)
```bash
nohup node server.js > server.log 2>&1 &
```
*서버 동작 로그는 `server.log` 파일에 기록됩니다.*

#### 방법 B: `pm2` 사용 (권장)
```bash
# pm2 글로벌 설치
sudo npm install -g pm2

# pm2로 서버 시작 및 관리
pm2 start server.js --name "nebb-backend"

# VM 재부팅 시 자동 실행 설정
pm2 startup
pm2 save
```

---

## 3단계: 접속 및 서비스 이용

### 1. Oracle VM 직접 접속 (가장 간단하고 권장됨)
브라우저 주소창에 다음과 같이 입력하여 접속합니다:
`http://<본인의 Oracle VM 공인 IP>:3000/`
- 이 방식으로 접속하면 프론트엔드가 백엔드와 같은 Origin(포트 3000)에서 서빙되므로, 별도로 API 주소를 입력할 필요 없이 곧바로 로컬 백엔드 API와 자동 연결됩니다.
- CORS나 혼합 콘텐츠(Mixed Content) 보안 차단 이슈 없이 모바일 및 모든 PC 브라우저에서 동기화가 정상 작동합니다.

### 2. GitHub Pages 혹은 외부 서비스 연동 접속
프론트엔드를 GitHub Pages(`https://<username>.github.io/...`)로 접속하는 경우:
1. 앱 실행 시 로그인 화면에 나오는 **Oracle VM API Server URL** 입력란에 `http://<본인의 Oracle VM 공인 IP>:3000`을 명시적으로 입력하고 로그인/회원가입을 진행합니다.
2. 브라우저가 HTTPS 주소(`github.io`)에서 HTTP 주소(`Oracle VM IP`)로 API 호출을 시도할 때 Mixed Content 보안 사유로 차단할 수 있습니다. 이 경우 브라우저 주소창 오른쪽의 "안전하지 않은 콘텐츠 허용" 또는 "Mixed Content 허용" 설정을 활성화해야 동기화가 작동합니다.
3. 이를 근본적으로 해결하려면 Oracle VM 전면에 Nginx와 Let's Encrypt를 적용하여 `https://` 도메인을 연결하고 해당 HTTPS 주소를 API 서버 URL에 입력하여야 합니다.

---

## 4단계: 업데이트 및 유지보수
코드가 변경되어 최신 소스 코드를 서버에 반영할 때는 다음과 같이 처리합니다:

1. 로컬 PC에서 변경 사항을 GitHub에 커밋 및 푸시합니다:
   ```bash
   git add .
   git commit -m "update frontend or backend logic"
   git push origin main
   ```
2. Oracle VM 터미널에서 최신 코드를 가져오고 서버를 재시작합니다:
   ```bash
   # 최신 소스 가져오기
   git pull origin main

   # 서버 재시작 (PM2 기준)
   pm2 restart nebb-backend
   ```
