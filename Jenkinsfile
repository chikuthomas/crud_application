pipeline {
    agent any
    
    stages {
        stage('SSH to Linux Server') {
            steps {
                // Use the Jenkins SSH agent for the credentials you set up
                sshagent(['ssh-ictadmin']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ictadmin@10.140.240.51 'hostname; uptime;'
                    '''
                }
            }
        }
    }
}
