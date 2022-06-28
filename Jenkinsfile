node {
    checkout scm
    docker.withRegistry('https://registry.hub.docker.com', 'SerhiiDcoker') {
        docker.build("serhiihavryliuk/next-app").push()
    }
}