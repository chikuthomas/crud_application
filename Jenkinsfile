pipeline {
    agent any
    
    stages {
        stage('SSH to Linux Server') {
            steps {
                script {
                    sshagent (credentials: ['ssh-ictadmin']) {
                        sh '''
                            ssh -o StrictHostKeyChecking=no ictadmin@10.140.240.51 'hostname; uptime;'
                        '''
                    }
                }
            }
        }
    }
}
