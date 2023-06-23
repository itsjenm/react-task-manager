// declaration file for selector functions
// Declaring selector functions outside of components is also good because the components do not know about the form of the Redux state, and if it changes, it will be enough to edit the code of one file, and not look for selectors in the code of all application components.
export const getTasks = state => state.tasks;

export const getStatusFilter = state => state.filters.status;
