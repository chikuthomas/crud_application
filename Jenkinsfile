pipeline {
    agent any
    stages {
        stage('Test SSH Connection') {
            steps {
                script {
                    // Use SSH credentials (use the ID of your stored SSH key)
                    sshagent (credentials: ['48197f9f-d1d9-47ce-94cc-cb4a20f5075d']) {
                        // Test the SSH connection
                        sh 'ssh -o StrictHostKeyChecking=no ictadmin@10.140.240.51 "echo SSH connection successful"'
                    }
                }
            }
        }
    }
}
