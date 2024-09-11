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
                    sshagent (credentials: ['48197f9f-d1d9-47ce-94cc-cb4a20f5075d']) {
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
