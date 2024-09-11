pipeline {
    agent any

    environment {
        DOCKER_SERVER_IP = '10.140.240.51'
    }

    stages {
        stage('Test SSH Connection') {
            steps {
                script {
                    echo 'Testing SSH connection to Docker server...'
                    
                    // Use withCredentials to inject username and password
                    withCredentials([usernamePassword(credentialsId: '48197f9f-d1d9-47ce-94cc-cb4a20f5075d', usernameVariable: 'ictadmin', passwordVariable: 'malawi.2020')]) {
                        sh """
                        sshpass -p "${DOCKER_PASSWORD}" ssh -o StrictHostKeyChecking=no ${DOCKER_USER}@${DOCKER_SERVER_IP} "echo 'SSH connection successful'"
                        """
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'SSH connection to Docker server succeeded.'
        }
        failure {
            echo 'Failed to SSH into Docker server.'
        }
    }
}
