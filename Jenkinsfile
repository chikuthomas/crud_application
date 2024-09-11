pipeline {
    agent any
    stages {
        stage('Test SSH Connection') {
            steps {
                script {
                    // Use stored username/password credentials
                    withCredentials([usernamePassword(credentialsId: 'ssh-ictadmin', passwordVariable: 'SSH_PASS', usernameVariable: 'SSH_USER')]) {
                        // Test SSH connection using password authentication
                        sh '''
                        sshpass -p $SSH_PASS ssh -o StrictHostKeyChecking=no $SSH_USER@10.140.240.51 "echo SSH connection successful"
                        '''
                    }
                }
            }
        }
    }
}
