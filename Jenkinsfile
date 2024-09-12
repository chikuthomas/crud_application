pipeline {
    agent any
    
    stages {
        stage('SSH to Linux Server') {
            steps {
                sh '''
                    ssh -i C:/Users/cthomas/.ssh/id-rsa -o StrictHostKeyChecking=no ictadmin@10.140.240.51 'hostname; uptime;'
                '''
            }
        }
    }
}
