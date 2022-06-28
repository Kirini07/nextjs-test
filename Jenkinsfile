node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'SerhiiDcoker') {
        def customImage = docker.build("serhiihavryliuk/next-app")
        customImage.push()
    }
}