pipeline {
    agent any

    environment {
        DOCKER_SERVER_IP = '10.140.240.51'
        DOCKER_USER = 'ictadmin'
    }

    stages {
        stage('Check Environment Variables') {
            steps {
                script {
                    echo "DOCKER_SERVER_IP: ${DOCKER_SERVER_IP}"
                    echo "DOCKER_USER: ${DOCKER_USER}"
                }
            }
        }
        stage('Test SSH Connection') {
            steps {
                script {
                    echo 'Testing SSH connection to Docker server...'
                    
                    // Use sshagent with the stored Jenkins credentials
                    sshagent (credentials: ['ssh-ictadmin']) {
                        bat """
                        echo 'Attempting SSH connection...'
                        ssh -o StrictHostKeyChecking=no ${DOCKER_USER}@${DOCKER_SERVER_IP} "echo 'SSH connection successful'"
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
