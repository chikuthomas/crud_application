pipeline {
    agent any

    environment {
        DOCKER_HOST = 'tcp://10.140.240.51:2375' // Docker server IP
        DOCKER_IMAGE = 'myapp:latest'
        // REGISTRY_CREDENTIALS = credentials('docker-credentials') // Jenkins credentials for DockerHub (if pushing to DockerHub)
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository from GitHub
                git branch: 'main', url: 'https://github.com/chikuthomas/crud_application.git'
            }
        }

        stage('Test SSH') {
            steps {
                sshagent(['48197f9f-d1d9-47ce-94cc-cb4a20f5075d']) {
                    // Test SSH by running a simple command (e.g., 'hostname')
                    sh 'ssh -o StrictHostKeyChecking=no ictadmin@10.140.240.51 hostname'
                    echo "SSH successful"
                }
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
                    sshagent(['48197f9f-d1d9-47ce-94cc-cb4a20f5075d']) {
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
