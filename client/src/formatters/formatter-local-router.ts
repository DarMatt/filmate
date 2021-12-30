export function formatterPathConcatPath() {
  let result = '';
  if (this.params.length) {
    for (const param of this.params) {
      result += `/:${param}`;
    }
    return `${this.path}${result}`;
  } else {
    return this.path;
  }
}
