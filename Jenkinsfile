
pipeline {
    agent any

    stages {
        stage('SSH to Linux Server') {
            steps {
                // This is for Windows shell execution (bat). Adjust the path as per your setup.
                bat '''
                    ssh -i "C:\\Users\\cthomas\\.ssh\\id_rsa" -o StrictHostKeyChecking=no ictadmin@10.140.240.51 "hostname; uptime;"
                '''
            }
        }
    }
}
