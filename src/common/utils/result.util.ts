type ErrorState<E> = {
    success: false;
    error: E;
}

type SuccessState<D> = {
    success: true;
    data: D;
}

type ResultState<D, E> = SuccessState<D> | ErrorState<E>;


export class Result<D, E> {
    private constructor(private state: ResultState<D, E>) { }

    public static ok<D, E = never>(data: D): Result<D, E> {
        return new Result({ success: true, data });
    }

    public static fail<E, D = never>(error: E): Result<D, E> {
        return new Result({ success: false, error });
    }

    public map<D2>(callback: (data: D) => D2): Result<D2, E> {
        if (this.state.success) return Result.ok(callback(this.state.data));
        else return Result.fail(this.state.error);
    }

    public isSuccess(): this is Result<D, never> {
        return this.state.success;
    }

    public isFail(): this is Result<never, E> {
        return !this.state.success;
    }

    public get data(): D {
        if (!this.state.success) throw new Error("Result is failure")
        return this.state.data;
    }

    public get error(): E {
        if (this.state.success) throw new Error("Result is success")
        return this.state.error;
    }
}