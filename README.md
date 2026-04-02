# rbcobot-docs

## 준비하기

1. Git 설치
https://git-scm.com/download/

2. (Optional) GitHub Desktop 설치
https://desktop.github.com/

3. (Optional) VSCode 설치
https://code.visualstudio.com/Download

4. NodeJS 설치
https://nodejs.org/en/download/current


## How To Run

### 1. Clone Repository
GitHub Desktop에서 File > Clone Repository > GitHub.com 탭 > RainbowRobotics/rbcobot-docs > 원하는 Local Path 설정 후 > 'Clone' 버튼 클릭

![Alt text](github-assets/image.png)


### 2. Open Reposity in VSCode

#### Extension 설치

Ctrl + Shift + X 누른 후 아래 extension 설치
- vue.volar
- vue.vscode-typescript-vue-plugin
- yzhang.markdown-all-in-one

아래 extension을 검색해서 'Disable (Workspace)' 를 눌러 제외함
- @builtin typescript-language-features

### 3. Run

In root direcotry, run the following script
```bash
$ npm install
$ npm run docs:dev
# or npm run docs:dev -- --host 0.0.0.0
```

### 4. Build

이미지 파일(.png, .jpg ...)이 잠긴 상태로 빌드가 되면 브라우저엔 엑박으로 나오므로 DocuRay가 설치되어 있다면 **빌드 전 복호화 꼭 확인!!!**
복호화 확인 완료 후, root directory에서
```bash
$ npm run docs:build
```

### 5. WebPage Update

빌드가 완료 됬다면

1. Github Desktop 실행
2. rb_cobot_docs repository 열기
3. 메모 작성 후 commit & push
4. 약 5분 후 Cobot Web Manual 페이지 접속하여 업데이트 확인

