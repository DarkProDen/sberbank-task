class BackendService {
  getTodoList() {
    return JSON.parse(localStorage.getItem('todoList')) || [];
  }

  setTodoList(todoList) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}

export default BackendService;
