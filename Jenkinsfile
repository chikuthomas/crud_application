pipeline {
    agent any
    stages {
        stage('Test SSH Connection') {
            steps {
                script {
                    // Use SSH credentials (use the ID of your stored SSH key)
                    sshagent (credentials: ['ssh-ictadmin']) {
                        // Test the SSH connection
                        sh 'ssh -o StrictHostKeyChecking=no ictadmin@10.140.240.51 "echo SSH connection successful"'
                    }
                }
            }
        }
    }
}
