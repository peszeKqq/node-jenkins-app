pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/peszekqq/node-jenkins-app.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
