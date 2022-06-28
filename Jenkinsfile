node {
    sh "echo <=========== PULL FROM GITHUB ===========>"
    checkout scm
    sh "echo <=========== DOCKER LOGIN ===========>"
    docker.withRegistry('https://registry.hub.docker.com', 'SerhiiDcoker') {
        sh "echo <=========== DOCKER BUILD ===========>"
        def customImage = docker.build("serhiihavryliuk/next-app")
        sh "echo <=========== DOCKER PUSH ===========>"
        customImage.push()
    }
}