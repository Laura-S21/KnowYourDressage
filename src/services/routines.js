import routinesList from "../data/routinesList"

export function getRoutinesbyName(name) {
    return routinesList.find(routine => routine.name === name)
}