class Food {
  private element: HTMLElement;

  constructor() {
    //  末尾加上感叹号,表示id为food的元素必定存在
    this.element = document.getElementById("food")!;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

export default Food;
