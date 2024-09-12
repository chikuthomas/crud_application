
pipeline {
    agent any

    environment {
    SSH_KEY = "C:\\Users\\cthomas\\.ssh\\id_rsa"
}
    stages {
        stage('SSH to Linux Server') {
            steps {
                // Inject the SSH private key from Jenkins credentials store
                withCredentials([sshUserPrivateKey(credentialsId: 'ssh-ictadmin', keyFileVariable: 'SSH_KEY')]) {
                    bat '''
                        ssh -i $SSH_KEY -o StrictHostKeyChecking=no ictadmin@10.140.240.51 'hostname; uptime;'
                    '''
                }
            }
        }
    }
}

