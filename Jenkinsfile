pipeline {
    agent any

    environment {
        DOCKER_HOST = 'tcp://10.140.240.51:2375' // Docker server IP
        DOCKER_IMAGE = 'myapp:latest'
    }

    stages {
        stage('Deploy to Docker Server') {
            steps {
                script {
                    // Use SSH credentials to connect to the Docker server
                    sshagent(['48197f9f-d1d9-47ce-94cc-cb4a20f5075d']) { // Replace 'docker-server-ssh' with your actual credential ID
                        sh """
                        ssh -o StrictHostKeyChecking=no ictadmin@10.140.240.51 << EOF
                            docker stop myapp || true
                            docker rm myapp || true
                            docker run -d --name myapp -p 80:80 ${DOCKER_IMAGE}
                        EOF
                        """
                    }
                }
            }
        }
    }
}
