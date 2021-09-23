export type IntervalFunction = () => void;

export default class Interval {
  private static instance: Interval;
  public static getInstance(): Interval {
    if (!Interval.instance) {
      Interval.instance = new Interval();
    }
    return Interval.instance;
  }

  private handlers: IntervalFunction[] = [];
  private timeout = 1000;

  private handle = -1;

  public add(fn: IntervalFunction): void {
    this.handlers.push(fn);
    this.checkState();
  }

  public remove(fn: IntervalFunction): void {
    const index = this.handlers.indexOf(fn);
    if (index >= 0) {
      this.handlers.splice(index, 1);
      this.checkState();
    }
  }

  private checkState(): void {
    if (this.handlers.length > 0) {
      if (this.handle == -1) {
        this.handle = setInterval(() => this.callback(), this.timeout);
      }
    } else {
      if (this.handle != -1) {
        clearInterval(this.handle);
        this.handle = -1;
      }
    }
  }

  private callback(): void {
    for (const h of this.handlers) {
      h();
    }
  }
}
