pipeline {
    agent any
    
    stages {
        stage('Use SSH') {
            steps {
                bat 'ssh -i "/c/Program Files/Jenkins/.ssh/id_rsa" ictadmin@10.140.240.51 "your-command"'
            }
        }
    }
}
