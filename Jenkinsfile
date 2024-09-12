
pipeline {
    agent any
    
    stages {
        stage('SSH to Linux Server') {
            steps {
                // Inject the SSH private key from Jenkins credentials store
                withCredentials([sshUserPrivateKey(credentialsId: 'ssh-ictadmin', keyFileVariable: 'SSH_KEY')]) {
                    sh '''
                        ssh -i $SSH_KEY -o StrictHostKeyChecking=no ictadmin@10.140.240.51 'hostname; uptime;'
                    '''
                }
            }
        }
    }
}

