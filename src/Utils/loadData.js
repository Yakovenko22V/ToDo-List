export const loadData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(arrTask);
    }, 1000);
})

const arrTask = [
    {
      nameOfTask: 'Pay utility bills',
      idOfTask: 1,
      flagOfImportance: true,
      isTaskActive: true,
    },

    {
      nameOfTask: 'Do homework for courses SkillUp',
      idOfTask: 2,
      flagOfImportance: true,
      isTaskActive: true,
    },

    {
      nameOfTask: 'Watch the new Marvel movie',
      idOfTask: 3,
      flagOfImportance: false,
      isTaskActive: false,
    },
  ]