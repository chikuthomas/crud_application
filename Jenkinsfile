pipeline {
    agent any

    environment {
        DOCKER_HOST = 'tcp://10.140.240.51:2375' // Docker server IP
        DOCKER_IMAGE = 'myapp:latest'
        REGISTRY_CREDENTIALS = credentials('docker-credentials') // Jenkins credentials for DockerHub (if pushing to DockerHub)
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository from GitHub
                git branch: 'main', url: 'https://github.com/your-repo/your-project.git'
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
                    // SSH into the Docker server and spin up the container
                    sshagent(['ssh-credentials-id']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no user@10.140.240.51 << EOF
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
