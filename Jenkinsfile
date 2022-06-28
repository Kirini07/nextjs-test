node {
    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {
        def customImage = docker.build("serhiihavryliuk/next-app")
        customImage.push()
    }
}