// file for storing constants (for example, status filter values)
// We use the method Object.freeze() in order to “freeze” the filter values object and prevent it from being accidentally changed by reference in import places.
export const statusFilters = {
    all: "all",
    active: "active",
    completed: "completed",
  };