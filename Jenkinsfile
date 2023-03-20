pipeline {
  agent any
  options {
    cacheDir '/var/cache/jenkins/npm-cache'
  }
  environment {
    NODE_ENV = 'production'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/Baibhavikarki/ESTS']]])
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Deploy to Heroku') {
      steps {
        sh 'heroku login -i'
        sh 'heroku git:remote -a ests-ui'
        sh 'git push heroku HEAD:main'
      }
    }
  }
}
