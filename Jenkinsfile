pipeline {
    agent any

    environment {
        DOCKER_SERVER_IP = '10.140.240.51'
        DOCKER_USER = 'ictadmin'
        SSH_KEY_PATH = 'C:\\users\\cthomas\\.ssh\\id_rsa'  // Set the correct path to the SSH key used for the ictadmin user
    }

    stages {
        stage('Test SSH Connection') {
            steps {
                script {
                    echo 'Testing SSH connection to Docker server...'
                   bat """
                    ssh -i ${SSH_KEY_PATH} -o StrictHostKeyChecking=no ${DOCKER_USER}@${DOCKER_SERVER_IP} "echo 'SSH connection successful'"
                    """
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
