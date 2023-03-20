pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Baibhavikarki/ESTS.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        // Add additional stages for deployment or other tasks as needed
    }

    post {
        always {
            deleteDir() // Clean up the workspace after the pipeline finishes
        }
    }
}
