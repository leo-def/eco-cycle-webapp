
export function getMainTasks (props: any): Array<any> {
    const tasks = props.tasks || []
    return tasks.filter((task: any) => !!task && !task.local)
  }
  