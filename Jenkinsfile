pipeline {
    agent any

    environment {
        DOCKER_SERVER_IP = '10.140.240.51'
        DOCKER_USER = 'ictadmin'
    }

    stages {
        stage('Test SSH Connection') {
            steps {
                script {
                    echo 'Testing SSH connection to Docker server...'
                    
                    // Use sshagent with the stored Jenkins credentials
                    sshagent (credentials: ['ssh-ictadmin']) {
                        sh """
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
