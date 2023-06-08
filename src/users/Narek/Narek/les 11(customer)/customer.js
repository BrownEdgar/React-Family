

export default function useHook(initialData) {
    const allDone = () => {
     const newData =  todos.forEach(item => item.complited == true);
     return newData
    }
}
