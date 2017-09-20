function ensure(value) {
  if (value) {
    return value
  } else if (!value || isNaN(value)) {
    throw err
  }
}

ensure(2);