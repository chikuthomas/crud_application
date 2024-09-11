pipeline {
    agent any

    environment {
        DOCKER_HOST = 'tcp://10.140.240.51:2375' // Docker server IP
        DOCKER_IMAGE = 'myapp:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository from GitHub
                git branch: 'main', url: 'https://github.com/chikuthomas/crud_application.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                }
            }
        }

        stage('Deploy to Docker Server') {
            steps {
                script {
                    // Use SSH credentials to connect to the Docker server
                    sshagent(['correct-credentials-id']) { // Replace 'correct-credentials-id' with your actual credential ID
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

    post {
        always {
            // Clean up any local Docker resources (optional)
            sh 'docker rmi ${DOCKER_IMAGE}'
        }
    }
}
