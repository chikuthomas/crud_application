pipeline {
    agent any
    
    stages {
        stage('Use SSH') {
            steps {
              bat '''
                ssh -i "C:\\users\\cthomas\\.ssh\\id_rsa"  ictadmin@10.140.240.51 "ls"
                '''
            }
        }
    }
}
