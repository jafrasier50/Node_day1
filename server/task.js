 
class Task {

    constructor(taskData){
        const {title, priority} = taskData
        this.title = title
        this.priority =  priority
        this.dateCreated = Date.now()
        this.dateCompleted = null
        this.isCompleted = false
        this.id = Math.random().toString(36).substring(2) 
        + (new Date()).getTime().toString(36);
    } 
}

module.exports = Task