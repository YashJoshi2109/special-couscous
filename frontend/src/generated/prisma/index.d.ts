
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model TimeLog
 * 
 */
export type TimeLog = $Result.DefaultSelection<Prisma.$TimeLogPayload>
/**
 * Model Voucher
 * 
 */
export type Voucher = $Result.DefaultSelection<Prisma.$VoucherPayload>
/**
 * Model VoucherLog
 * 
 */
export type VoucherLog = $Result.DefaultSelection<Prisma.$VoucherLogPayload>
/**
 * Model PayPeriod
 * 
 */
export type PayPeriod = $Result.DefaultSelection<Prisma.$PayPeriodPayload>
/**
 * Model PayEstimate
 * 
 */
export type PayEstimate = $Result.DefaultSelection<Prisma.$PayEstimatePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model AppConfig
 * 
 */
export type AppConfig = $Result.DefaultSelection<Prisma.$AppConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  EMPLOYEE: 'EMPLOYEE',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const ShiftRole: {
  FRONT_DESK: 'FRONT_DESK',
  SHUTTLE: 'SHUTTLE'
};

export type ShiftRole = (typeof ShiftRole)[keyof typeof ShiftRole]


export const ShiftType: {
  MORNING: 'MORNING',
  EVENING: 'EVENING',
  NIGHT: 'NIGHT',
  SHUTTLE: 'SHUTTLE'
};

export type ShiftType = (typeof ShiftType)[keyof typeof ShiftType]


export const SessionStatus: {
  OPEN: 'OPEN',
  COMPLETED: 'COMPLETED',
  PENDING_REVIEW: 'PENDING_REVIEW',
  EDITED: 'EDITED',
  CONFLICTED: 'CONFLICTED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]


export const TimeLogStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  DECLINED: 'DECLINED',
  ADJUSTED: 'ADJUSTED'
};

export type TimeLogStatus = (typeof TimeLogStatus)[keyof typeof TimeLogStatus]


export const VoucherStatus: {
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  PENDING_REVIEW: 'PENDING_REVIEW'
};

export type VoucherStatus = (typeof VoucherStatus)[keyof typeof VoucherStatus]


export const PayPeriodStatus: {
  OPEN: 'OPEN',
  LOCKED: 'LOCKED',
  FINALIZED: 'FINALIZED'
};

export type PayPeriodStatus = (typeof PayPeriodStatus)[keyof typeof PayPeriodStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type ShiftRole = $Enums.ShiftRole

export const ShiftRole: typeof $Enums.ShiftRole

export type ShiftType = $Enums.ShiftType

export const ShiftType: typeof $Enums.ShiftType

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

export type TimeLogStatus = $Enums.TimeLogStatus

export const TimeLogStatus: typeof $Enums.TimeLogStatus

export type VoucherStatus = $Enums.VoucherStatus

export const VoucherStatus: typeof $Enums.VoucherStatus

export type PayPeriodStatus = $Enums.PayPeriodStatus

export const PayPeriodStatus: typeof $Enums.PayPeriodStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeLog`: Exposes CRUD operations for the **TimeLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeLogs
    * const timeLogs = await prisma.timeLog.findMany()
    * ```
    */
  get timeLog(): Prisma.TimeLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucherLog`: Exposes CRUD operations for the **VoucherLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VoucherLogs
    * const voucherLogs = await prisma.voucherLog.findMany()
    * ```
    */
  get voucherLog(): Prisma.VoucherLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payPeriod`: Exposes CRUD operations for the **PayPeriod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayPeriods
    * const payPeriods = await prisma.payPeriod.findMany()
    * ```
    */
  get payPeriod(): Prisma.PayPeriodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payEstimate`: Exposes CRUD operations for the **PayEstimate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayEstimates
    * const payEstimates = await prisma.payEstimate.findMany()
    * ```
    */
  get payEstimate(): Prisma.PayEstimateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appConfig`: Exposes CRUD operations for the **AppConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppConfigs
    * const appConfigs = await prisma.appConfig.findMany()
    * ```
    */
  get appConfig(): Prisma.AppConfigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Employee: 'Employee',
    Admin: 'Admin',
    Session: 'Session',
    TimeLog: 'TimeLog',
    Voucher: 'Voucher',
    VoucherLog: 'VoucherLog',
    PayPeriod: 'PayPeriod',
    PayEstimate: 'PayEstimate',
    AuditLog: 'AuditLog',
    AppConfig: 'AppConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "employee" | "admin" | "session" | "timeLog" | "voucher" | "voucherLog" | "payPeriod" | "payEstimate" | "auditLog" | "appConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      TimeLog: {
        payload: Prisma.$TimeLogPayload<ExtArgs>
        fields: Prisma.TimeLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeLogPayload>
          }
          findFirst: {
            args: Prisma.TimeLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeLogPayload>
          }
          findMany: {
            args: Prisma.TimeLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeLogPayload>[]
          }
          create: {
            args: Prisma.TimeLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeLogPayload>
          }
          createMany: {
            args: Prisma.TimeLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeLogPayload>[]
          }
          delete: {
            args: Prisma.TimeLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeLogPayload>
          }
          update: {
            args: Prisma.TimeLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeLogPayload>
          }
          deleteMany: {
            args: Prisma.TimeLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeLogPayload>[]
          }
          upsert: {
            args: Prisma.TimeLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeLogPayload>
          }
          aggregate: {
            args: Prisma.TimeLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeLog>
          }
          groupBy: {
            args: Prisma.TimeLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeLogCountArgs<ExtArgs>
            result: $Utils.Optional<TimeLogCountAggregateOutputType> | number
          }
        }
      }
      Voucher: {
        payload: Prisma.$VoucherPayload<ExtArgs>
        fields: Prisma.VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findFirst: {
            args: Prisma.VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findMany: {
            args: Prisma.VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          create: {
            args: Prisma.VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          createMany: {
            args: Prisma.VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          delete: {
            args: Prisma.VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          update: {
            args: Prisma.VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          deleteMany: {
            args: Prisma.VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoucherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          upsert: {
            args: Prisma.VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          aggregate: {
            args: Prisma.VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher>
          }
          groupBy: {
            args: Prisma.VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherCountAggregateOutputType> | number
          }
        }
      }
      VoucherLog: {
        payload: Prisma.$VoucherLogPayload<ExtArgs>
        fields: Prisma.VoucherLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherLogPayload>
          }
          findFirst: {
            args: Prisma.VoucherLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherLogPayload>
          }
          findMany: {
            args: Prisma.VoucherLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherLogPayload>[]
          }
          create: {
            args: Prisma.VoucherLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherLogPayload>
          }
          createMany: {
            args: Prisma.VoucherLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoucherLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherLogPayload>[]
          }
          delete: {
            args: Prisma.VoucherLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherLogPayload>
          }
          update: {
            args: Prisma.VoucherLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherLogPayload>
          }
          deleteMany: {
            args: Prisma.VoucherLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoucherLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherLogPayload>[]
          }
          upsert: {
            args: Prisma.VoucherLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherLogPayload>
          }
          aggregate: {
            args: Prisma.VoucherLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucherLog>
          }
          groupBy: {
            args: Prisma.VoucherLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherLogCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherLogCountAggregateOutputType> | number
          }
        }
      }
      PayPeriod: {
        payload: Prisma.$PayPeriodPayload<ExtArgs>
        fields: Prisma.PayPeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayPeriodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayPeriodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>
          }
          findFirst: {
            args: Prisma.PayPeriodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayPeriodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>
          }
          findMany: {
            args: Prisma.PayPeriodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>[]
          }
          create: {
            args: Prisma.PayPeriodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>
          }
          createMany: {
            args: Prisma.PayPeriodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayPeriodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>[]
          }
          delete: {
            args: Prisma.PayPeriodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>
          }
          update: {
            args: Prisma.PayPeriodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>
          }
          deleteMany: {
            args: Prisma.PayPeriodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayPeriodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayPeriodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>[]
          }
          upsert: {
            args: Prisma.PayPeriodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayPeriodPayload>
          }
          aggregate: {
            args: Prisma.PayPeriodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayPeriod>
          }
          groupBy: {
            args: Prisma.PayPeriodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayPeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayPeriodCountArgs<ExtArgs>
            result: $Utils.Optional<PayPeriodCountAggregateOutputType> | number
          }
        }
      }
      PayEstimate: {
        payload: Prisma.$PayEstimatePayload<ExtArgs>
        fields: Prisma.PayEstimateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayEstimateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayEstimatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayEstimateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayEstimatePayload>
          }
          findFirst: {
            args: Prisma.PayEstimateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayEstimatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayEstimateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayEstimatePayload>
          }
          findMany: {
            args: Prisma.PayEstimateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayEstimatePayload>[]
          }
          create: {
            args: Prisma.PayEstimateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayEstimatePayload>
          }
          createMany: {
            args: Prisma.PayEstimateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayEstimateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayEstimatePayload>[]
          }
          delete: {
            args: Prisma.PayEstimateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayEstimatePayload>
          }
          update: {
            args: Prisma.PayEstimateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayEstimatePayload>
          }
          deleteMany: {
            args: Prisma.PayEstimateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayEstimateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayEstimateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayEstimatePayload>[]
          }
          upsert: {
            args: Prisma.PayEstimateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayEstimatePayload>
          }
          aggregate: {
            args: Prisma.PayEstimateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayEstimate>
          }
          groupBy: {
            args: Prisma.PayEstimateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayEstimateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayEstimateCountArgs<ExtArgs>
            result: $Utils.Optional<PayEstimateCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      AppConfig: {
        payload: Prisma.$AppConfigPayload<ExtArgs>
        fields: Prisma.AppConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          findFirst: {
            args: Prisma.AppConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          findMany: {
            args: Prisma.AppConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>[]
          }
          create: {
            args: Prisma.AppConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          createMany: {
            args: Prisma.AppConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>[]
          }
          delete: {
            args: Prisma.AppConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          update: {
            args: Prisma.AppConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          deleteMany: {
            args: Prisma.AppConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>[]
          }
          upsert: {
            args: Prisma.AppConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          aggregate: {
            args: Prisma.AppConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppConfig>
          }
          groupBy: {
            args: Prisma.AppConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppConfigCountArgs<ExtArgs>
            result: $Utils.Optional<AppConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    employee?: EmployeeOmit
    admin?: AdminOmit
    session?: SessionOmit
    timeLog?: TimeLogOmit
    voucher?: VoucherOmit
    voucherLog?: VoucherLogOmit
    payPeriod?: PayPeriodOmit
    payEstimate?: PayEstimateOmit
    auditLog?: AuditLogOmit
    appConfig?: AppConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    timeLogs: number
    vouchers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    timeLogs?: boolean | UserCountOutputTypeCountTimeLogsArgs
    vouchers?: boolean | UserCountOutputTypeCountVouchersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    timeLogs: number
    voucherLogs: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeLogs?: boolean | EmployeeCountOutputTypeCountTimeLogsArgs
    voucherLogs?: boolean | EmployeeCountOutputTypeCountVoucherLogsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountTimeLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeLogWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountVoucherLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherLogWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    timeLogs: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeLogs?: boolean | SessionCountOutputTypeCountTimeLogsArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountTimeLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | User$employeeArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    timeLogs?: boolean | User$timeLogsArgs<ExtArgs>
    vouchers?: boolean | User$vouchersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "firstName" | "lastName" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | User$employeeArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    timeLogs?: boolean | User$timeLogsArgs<ExtArgs>
    vouchers?: boolean | User$vouchersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      timeLogs: Prisma.$TimeLogPayload<ExtArgs>[]
      vouchers: Prisma.$VoucherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      firstName: string
      lastName: string
      role: $Enums.UserRole
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends User$employeeArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeLogs<T extends User$timeLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$timeLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vouchers<T extends User$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, User$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.employee
   */
  export type User$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.timeLogs
   */
  export type User$timeLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
    where?: TimeLogWhereInput
    orderBy?: TimeLogOrderByWithRelationInput | TimeLogOrderByWithRelationInput[]
    cursor?: TimeLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeLogScalarFieldEnum | TimeLogScalarFieldEnum[]
  }

  /**
   * User.vouchers
   */
  export type User$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    hourlyRate: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    hourlyRate: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    employeeId: string | null
    phone: string | null
    department: string | null
    hourlyRate: number | null
    bankAccount: string | null
    taxId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    employeeId: string | null
    phone: string | null
    department: string | null
    hourlyRate: number | null
    bankAccount: string | null
    taxId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    userId: number
    employeeId: number
    phone: number
    department: number
    hourlyRate: number
    bankAccount: number
    taxId: number
    roles: number
    shiftPrefs: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    hourlyRate?: true
  }

  export type EmployeeSumAggregateInputType = {
    hourlyRate?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    phone?: true
    department?: true
    hourlyRate?: true
    bankAccount?: true
    taxId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    phone?: true
    department?: true
    hourlyRate?: true
    bankAccount?: true
    taxId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    phone?: true
    department?: true
    hourlyRate?: true
    bankAccount?: true
    taxId?: true
    roles?: true
    shiftPrefs?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    userId: string
    employeeId: string
    phone: string | null
    department: string | null
    hourlyRate: number
    bankAccount: string | null
    taxId: string | null
    roles: string[]
    shiftPrefs: string[]
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    phone?: boolean
    department?: boolean
    hourlyRate?: boolean
    bankAccount?: boolean
    taxId?: boolean
    roles?: boolean
    shiftPrefs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    timeLogs?: boolean | Employee$timeLogsArgs<ExtArgs>
    voucherLogs?: boolean | Employee$voucherLogsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    phone?: boolean
    department?: boolean
    hourlyRate?: boolean
    bankAccount?: boolean
    taxId?: boolean
    roles?: boolean
    shiftPrefs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    phone?: boolean
    department?: boolean
    hourlyRate?: boolean
    bankAccount?: boolean
    taxId?: boolean
    roles?: boolean
    shiftPrefs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    phone?: boolean
    department?: boolean
    hourlyRate?: boolean
    bankAccount?: boolean
    taxId?: boolean
    roles?: boolean
    shiftPrefs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "employeeId" | "phone" | "department" | "hourlyRate" | "bankAccount" | "taxId" | "roles" | "shiftPrefs" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    timeLogs?: boolean | Employee$timeLogsArgs<ExtArgs>
    voucherLogs?: boolean | Employee$voucherLogsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      timeLogs: Prisma.$TimeLogPayload<ExtArgs>[]
      voucherLogs: Prisma.$VoucherLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      employeeId: string
      phone: string | null
      department: string | null
      hourlyRate: number
      bankAccount: string | null
      taxId: string | null
      roles: string[]
      shiftPrefs: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    timeLogs<T extends Employee$timeLogsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$timeLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    voucherLogs<T extends Employee$voucherLogsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$voucherLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly userId: FieldRef<"Employee", 'String'>
    readonly employeeId: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly department: FieldRef<"Employee", 'String'>
    readonly hourlyRate: FieldRef<"Employee", 'Float'>
    readonly bankAccount: FieldRef<"Employee", 'String'>
    readonly taxId: FieldRef<"Employee", 'String'>
    readonly roles: FieldRef<"Employee", 'String[]'>
    readonly shiftPrefs: FieldRef<"Employee", 'String[]'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.timeLogs
   */
  export type Employee$timeLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
    where?: TimeLogWhereInput
    orderBy?: TimeLogOrderByWithRelationInput | TimeLogOrderByWithRelationInput[]
    cursor?: TimeLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeLogScalarFieldEnum | TimeLogScalarFieldEnum[]
  }

  /**
   * Employee.voucherLogs
   */
  export type Employee$voucherLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogInclude<ExtArgs> | null
    where?: VoucherLogWhereInput
    orderBy?: VoucherLogOrderByWithRelationInput | VoucherLogOrderByWithRelationInput[]
    cursor?: VoucherLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherLogScalarFieldEnum | VoucherLogScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    permissions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    userId: string
    permissions: string[]
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "permissions" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      permissions: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly userId: FieldRef<"Admin", 'String'>
    readonly permissions: FieldRef<"Admin", 'String[]'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    basePayAmount: number | null
    tipsAmount: number | null
    bonusAmount: number | null
    dailyTotal: number | null
  }

  export type SessionSumAggregateOutputType = {
    basePayAmount: number | null
    tipsAmount: number | null
    bonusAmount: number | null
    dailyTotal: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    role: $Enums.ShiftRole | null
    shiftType: $Enums.ShiftType | null
    clockInTime: Date | null
    clockOutTime: Date | null
    status: $Enums.SessionStatus | null
    basePayAmount: number | null
    tipsAmount: number | null
    bonusAmount: number | null
    dailyTotal: number | null
    editedBy: string | null
    editedAt: Date | null
    editReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    role: $Enums.ShiftRole | null
    shiftType: $Enums.ShiftType | null
    clockInTime: Date | null
    clockOutTime: Date | null
    status: $Enums.SessionStatus | null
    basePayAmount: number | null
    tipsAmount: number | null
    bonusAmount: number | null
    dailyTotal: number | null
    editedBy: string | null
    editedAt: Date | null
    editReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    role: number
    shiftType: number
    clockInTime: number
    clockOutTime: number
    status: number
    basePayAmount: number
    tipsAmount: number
    bonusAmount: number
    dailyTotal: number
    editedBy: number
    editedAt: number
    editReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    basePayAmount?: true
    tipsAmount?: true
    bonusAmount?: true
    dailyTotal?: true
  }

  export type SessionSumAggregateInputType = {
    basePayAmount?: true
    tipsAmount?: true
    bonusAmount?: true
    dailyTotal?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    shiftType?: true
    clockInTime?: true
    clockOutTime?: true
    status?: true
    basePayAmount?: true
    tipsAmount?: true
    bonusAmount?: true
    dailyTotal?: true
    editedBy?: true
    editedAt?: true
    editReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    shiftType?: true
    clockInTime?: true
    clockOutTime?: true
    status?: true
    basePayAmount?: true
    tipsAmount?: true
    bonusAmount?: true
    dailyTotal?: true
    editedBy?: true
    editedAt?: true
    editReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    shiftType?: true
    clockInTime?: true
    clockOutTime?: true
    status?: true
    basePayAmount?: true
    tipsAmount?: true
    bonusAmount?: true
    dailyTotal?: true
    editedBy?: true
    editedAt?: true
    editReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    role: $Enums.ShiftRole
    shiftType: $Enums.ShiftType
    clockInTime: Date
    clockOutTime: Date | null
    status: $Enums.SessionStatus
    basePayAmount: number | null
    tipsAmount: number | null
    bonusAmount: number | null
    dailyTotal: number | null
    editedBy: string | null
    editedAt: Date | null
    editReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    shiftType?: boolean
    clockInTime?: boolean
    clockOutTime?: boolean
    status?: boolean
    basePayAmount?: boolean
    tipsAmount?: boolean
    bonusAmount?: boolean
    dailyTotal?: boolean
    editedBy?: boolean
    editedAt?: boolean
    editReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    timeLogs?: boolean | Session$timeLogsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    shiftType?: boolean
    clockInTime?: boolean
    clockOutTime?: boolean
    status?: boolean
    basePayAmount?: boolean
    tipsAmount?: boolean
    bonusAmount?: boolean
    dailyTotal?: boolean
    editedBy?: boolean
    editedAt?: boolean
    editReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    shiftType?: boolean
    clockInTime?: boolean
    clockOutTime?: boolean
    status?: boolean
    basePayAmount?: boolean
    tipsAmount?: boolean
    bonusAmount?: boolean
    dailyTotal?: boolean
    editedBy?: boolean
    editedAt?: boolean
    editReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    role?: boolean
    shiftType?: boolean
    clockInTime?: boolean
    clockOutTime?: boolean
    status?: boolean
    basePayAmount?: boolean
    tipsAmount?: boolean
    bonusAmount?: boolean
    dailyTotal?: boolean
    editedBy?: boolean
    editedAt?: boolean
    editReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "role" | "shiftType" | "clockInTime" | "clockOutTime" | "status" | "basePayAmount" | "tipsAmount" | "bonusAmount" | "dailyTotal" | "editedBy" | "editedAt" | "editReason" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    timeLogs?: boolean | Session$timeLogsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      timeLogs: Prisma.$TimeLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      role: $Enums.ShiftRole
      shiftType: $Enums.ShiftType
      clockInTime: Date
      clockOutTime: Date | null
      status: $Enums.SessionStatus
      basePayAmount: number | null
      tipsAmount: number | null
      bonusAmount: number | null
      dailyTotal: number | null
      editedBy: string | null
      editedAt: Date | null
      editReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    timeLogs<T extends Session$timeLogsArgs<ExtArgs> = {}>(args?: Subset<T, Session$timeLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly role: FieldRef<"Session", 'ShiftRole'>
    readonly shiftType: FieldRef<"Session", 'ShiftType'>
    readonly clockInTime: FieldRef<"Session", 'DateTime'>
    readonly clockOutTime: FieldRef<"Session", 'DateTime'>
    readonly status: FieldRef<"Session", 'SessionStatus'>
    readonly basePayAmount: FieldRef<"Session", 'Float'>
    readonly tipsAmount: FieldRef<"Session", 'Float'>
    readonly bonusAmount: FieldRef<"Session", 'Float'>
    readonly dailyTotal: FieldRef<"Session", 'Float'>
    readonly editedBy: FieldRef<"Session", 'String'>
    readonly editedAt: FieldRef<"Session", 'DateTime'>
    readonly editReason: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.timeLogs
   */
  export type Session$timeLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
    where?: TimeLogWhereInput
    orderBy?: TimeLogOrderByWithRelationInput | TimeLogOrderByWithRelationInput[]
    cursor?: TimeLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeLogScalarFieldEnum | TimeLogScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model TimeLog
   */

  export type AggregateTimeLog = {
    _count: TimeLogCountAggregateOutputType | null
    _avg: TimeLogAvgAggregateOutputType | null
    _sum: TimeLogSumAggregateOutputType | null
    _min: TimeLogMinAggregateOutputType | null
    _max: TimeLogMaxAggregateOutputType | null
  }

  export type TimeLogAvgAggregateOutputType = {
    duration: number | null
    roomBonus: number | null
    roomValue: number | null
  }

  export type TimeLogSumAggregateOutputType = {
    duration: number | null
    roomBonus: number | null
    roomValue: number | null
  }

  export type TimeLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    employeeId: string | null
    sessionId: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    roomBonus: number | null
    roomValue: number | null
    status: $Enums.TimeLogStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimeLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    employeeId: string | null
    sessionId: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    roomBonus: number | null
    roomValue: number | null
    status: $Enums.TimeLogStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimeLogCountAggregateOutputType = {
    id: number
    userId: number
    employeeId: number
    sessionId: number
    startTime: number
    endTime: number
    duration: number
    roomBonus: number
    roomValue: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimeLogAvgAggregateInputType = {
    duration?: true
    roomBonus?: true
    roomValue?: true
  }

  export type TimeLogSumAggregateInputType = {
    duration?: true
    roomBonus?: true
    roomValue?: true
  }

  export type TimeLogMinAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    sessionId?: true
    startTime?: true
    endTime?: true
    duration?: true
    roomBonus?: true
    roomValue?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimeLogMaxAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    sessionId?: true
    startTime?: true
    endTime?: true
    duration?: true
    roomBonus?: true
    roomValue?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimeLogCountAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    sessionId?: true
    startTime?: true
    endTime?: true
    duration?: true
    roomBonus?: true
    roomValue?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimeLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeLog to aggregate.
     */
    where?: TimeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeLogs to fetch.
     */
    orderBy?: TimeLogOrderByWithRelationInput | TimeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeLogs
    **/
    _count?: true | TimeLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeLogMaxAggregateInputType
  }

  export type GetTimeLogAggregateType<T extends TimeLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeLog[P]>
      : GetScalarType<T[P], AggregateTimeLog[P]>
  }




  export type TimeLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeLogWhereInput
    orderBy?: TimeLogOrderByWithAggregationInput | TimeLogOrderByWithAggregationInput[]
    by: TimeLogScalarFieldEnum[] | TimeLogScalarFieldEnum
    having?: TimeLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeLogCountAggregateInputType | true
    _avg?: TimeLogAvgAggregateInputType
    _sum?: TimeLogSumAggregateInputType
    _min?: TimeLogMinAggregateInputType
    _max?: TimeLogMaxAggregateInputType
  }

  export type TimeLogGroupByOutputType = {
    id: string
    userId: string
    employeeId: string
    sessionId: string
    startTime: Date
    endTime: Date | null
    duration: number | null
    roomBonus: number | null
    roomValue: number | null
    status: $Enums.TimeLogStatus
    createdAt: Date
    updatedAt: Date
    _count: TimeLogCountAggregateOutputType | null
    _avg: TimeLogAvgAggregateOutputType | null
    _sum: TimeLogSumAggregateOutputType | null
    _min: TimeLogMinAggregateOutputType | null
    _max: TimeLogMaxAggregateOutputType | null
  }

  type GetTimeLogGroupByPayload<T extends TimeLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeLogGroupByOutputType[P]>
            : GetScalarType<T[P], TimeLogGroupByOutputType[P]>
        }
      >
    >


  export type TimeLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    sessionId?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    roomBonus?: boolean
    roomValue?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeLog"]>

  export type TimeLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    sessionId?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    roomBonus?: boolean
    roomValue?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeLog"]>

  export type TimeLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    sessionId?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    roomBonus?: boolean
    roomValue?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeLog"]>

  export type TimeLogSelectScalar = {
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    sessionId?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    roomBonus?: boolean
    roomValue?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TimeLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "employeeId" | "sessionId" | "startTime" | "endTime" | "duration" | "roomBonus" | "roomValue" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["timeLog"]>
  export type TimeLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type TimeLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type TimeLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $TimeLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      employeeId: string
      sessionId: string
      startTime: Date
      endTime: Date | null
      duration: number | null
      roomBonus: number | null
      roomValue: number | null
      status: $Enums.TimeLogStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["timeLog"]>
    composites: {}
  }

  type TimeLogGetPayload<S extends boolean | null | undefined | TimeLogDefaultArgs> = $Result.GetResult<Prisma.$TimeLogPayload, S>

  type TimeLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeLogCountAggregateInputType | true
    }

  export interface TimeLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeLog'], meta: { name: 'TimeLog' } }
    /**
     * Find zero or one TimeLog that matches the filter.
     * @param {TimeLogFindUniqueArgs} args - Arguments to find a TimeLog
     * @example
     * // Get one TimeLog
     * const timeLog = await prisma.timeLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeLogFindUniqueArgs>(args: SelectSubset<T, TimeLogFindUniqueArgs<ExtArgs>>): Prisma__TimeLogClient<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeLogFindUniqueOrThrowArgs} args - Arguments to find a TimeLog
     * @example
     * // Get one TimeLog
     * const timeLog = await prisma.timeLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeLogClient<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeLogFindFirstArgs} args - Arguments to find a TimeLog
     * @example
     * // Get one TimeLog
     * const timeLog = await prisma.timeLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeLogFindFirstArgs>(args?: SelectSubset<T, TimeLogFindFirstArgs<ExtArgs>>): Prisma__TimeLogClient<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeLogFindFirstOrThrowArgs} args - Arguments to find a TimeLog
     * @example
     * // Get one TimeLog
     * const timeLog = await prisma.timeLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeLogClient<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeLogs
     * const timeLogs = await prisma.timeLog.findMany()
     * 
     * // Get first 10 TimeLogs
     * const timeLogs = await prisma.timeLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeLogWithIdOnly = await prisma.timeLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeLogFindManyArgs>(args?: SelectSubset<T, TimeLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeLog.
     * @param {TimeLogCreateArgs} args - Arguments to create a TimeLog.
     * @example
     * // Create one TimeLog
     * const TimeLog = await prisma.timeLog.create({
     *   data: {
     *     // ... data to create a TimeLog
     *   }
     * })
     * 
     */
    create<T extends TimeLogCreateArgs>(args: SelectSubset<T, TimeLogCreateArgs<ExtArgs>>): Prisma__TimeLogClient<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeLogs.
     * @param {TimeLogCreateManyArgs} args - Arguments to create many TimeLogs.
     * @example
     * // Create many TimeLogs
     * const timeLog = await prisma.timeLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeLogCreateManyArgs>(args?: SelectSubset<T, TimeLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeLogs and returns the data saved in the database.
     * @param {TimeLogCreateManyAndReturnArgs} args - Arguments to create many TimeLogs.
     * @example
     * // Create many TimeLogs
     * const timeLog = await prisma.timeLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeLogs and only return the `id`
     * const timeLogWithIdOnly = await prisma.timeLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeLogCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeLog.
     * @param {TimeLogDeleteArgs} args - Arguments to delete one TimeLog.
     * @example
     * // Delete one TimeLog
     * const TimeLog = await prisma.timeLog.delete({
     *   where: {
     *     // ... filter to delete one TimeLog
     *   }
     * })
     * 
     */
    delete<T extends TimeLogDeleteArgs>(args: SelectSubset<T, TimeLogDeleteArgs<ExtArgs>>): Prisma__TimeLogClient<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeLog.
     * @param {TimeLogUpdateArgs} args - Arguments to update one TimeLog.
     * @example
     * // Update one TimeLog
     * const timeLog = await prisma.timeLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeLogUpdateArgs>(args: SelectSubset<T, TimeLogUpdateArgs<ExtArgs>>): Prisma__TimeLogClient<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeLogs.
     * @param {TimeLogDeleteManyArgs} args - Arguments to filter TimeLogs to delete.
     * @example
     * // Delete a few TimeLogs
     * const { count } = await prisma.timeLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeLogDeleteManyArgs>(args?: SelectSubset<T, TimeLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeLogs
     * const timeLog = await prisma.timeLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeLogUpdateManyArgs>(args: SelectSubset<T, TimeLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeLogs and returns the data updated in the database.
     * @param {TimeLogUpdateManyAndReturnArgs} args - Arguments to update many TimeLogs.
     * @example
     * // Update many TimeLogs
     * const timeLog = await prisma.timeLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeLogs and only return the `id`
     * const timeLogWithIdOnly = await prisma.timeLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimeLogUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeLog.
     * @param {TimeLogUpsertArgs} args - Arguments to update or create a TimeLog.
     * @example
     * // Update or create a TimeLog
     * const timeLog = await prisma.timeLog.upsert({
     *   create: {
     *     // ... data to create a TimeLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeLog we want to update
     *   }
     * })
     */
    upsert<T extends TimeLogUpsertArgs>(args: SelectSubset<T, TimeLogUpsertArgs<ExtArgs>>): Prisma__TimeLogClient<$Result.GetResult<Prisma.$TimeLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeLogCountArgs} args - Arguments to filter TimeLogs to count.
     * @example
     * // Count the number of TimeLogs
     * const count = await prisma.timeLog.count({
     *   where: {
     *     // ... the filter for the TimeLogs we want to count
     *   }
     * })
    **/
    count<T extends TimeLogCountArgs>(
      args?: Subset<T, TimeLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeLogAggregateArgs>(args: Subset<T, TimeLogAggregateArgs>): Prisma.PrismaPromise<GetTimeLogAggregateType<T>>

    /**
     * Group by TimeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeLogGroupByArgs['orderBy'] }
        : { orderBy?: TimeLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeLog model
   */
  readonly fields: TimeLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeLog model
   */
  interface TimeLogFieldRefs {
    readonly id: FieldRef<"TimeLog", 'String'>
    readonly userId: FieldRef<"TimeLog", 'String'>
    readonly employeeId: FieldRef<"TimeLog", 'String'>
    readonly sessionId: FieldRef<"TimeLog", 'String'>
    readonly startTime: FieldRef<"TimeLog", 'DateTime'>
    readonly endTime: FieldRef<"TimeLog", 'DateTime'>
    readonly duration: FieldRef<"TimeLog", 'Int'>
    readonly roomBonus: FieldRef<"TimeLog", 'Int'>
    readonly roomValue: FieldRef<"TimeLog", 'Float'>
    readonly status: FieldRef<"TimeLog", 'TimeLogStatus'>
    readonly createdAt: FieldRef<"TimeLog", 'DateTime'>
    readonly updatedAt: FieldRef<"TimeLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimeLog findUnique
   */
  export type TimeLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
    /**
     * Filter, which TimeLog to fetch.
     */
    where: TimeLogWhereUniqueInput
  }

  /**
   * TimeLog findUniqueOrThrow
   */
  export type TimeLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
    /**
     * Filter, which TimeLog to fetch.
     */
    where: TimeLogWhereUniqueInput
  }

  /**
   * TimeLog findFirst
   */
  export type TimeLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
    /**
     * Filter, which TimeLog to fetch.
     */
    where?: TimeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeLogs to fetch.
     */
    orderBy?: TimeLogOrderByWithRelationInput | TimeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeLogs.
     */
    cursor?: TimeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeLogs.
     */
    distinct?: TimeLogScalarFieldEnum | TimeLogScalarFieldEnum[]
  }

  /**
   * TimeLog findFirstOrThrow
   */
  export type TimeLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
    /**
     * Filter, which TimeLog to fetch.
     */
    where?: TimeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeLogs to fetch.
     */
    orderBy?: TimeLogOrderByWithRelationInput | TimeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeLogs.
     */
    cursor?: TimeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeLogs.
     */
    distinct?: TimeLogScalarFieldEnum | TimeLogScalarFieldEnum[]
  }

  /**
   * TimeLog findMany
   */
  export type TimeLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
    /**
     * Filter, which TimeLogs to fetch.
     */
    where?: TimeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeLogs to fetch.
     */
    orderBy?: TimeLogOrderByWithRelationInput | TimeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeLogs.
     */
    cursor?: TimeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeLogs.
     */
    skip?: number
    distinct?: TimeLogScalarFieldEnum | TimeLogScalarFieldEnum[]
  }

  /**
   * TimeLog create
   */
  export type TimeLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeLog.
     */
    data: XOR<TimeLogCreateInput, TimeLogUncheckedCreateInput>
  }

  /**
   * TimeLog createMany
   */
  export type TimeLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeLogs.
     */
    data: TimeLogCreateManyInput | TimeLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeLog createManyAndReturn
   */
  export type TimeLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * The data used to create many TimeLogs.
     */
    data: TimeLogCreateManyInput | TimeLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeLog update
   */
  export type TimeLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeLog.
     */
    data: XOR<TimeLogUpdateInput, TimeLogUncheckedUpdateInput>
    /**
     * Choose, which TimeLog to update.
     */
    where: TimeLogWhereUniqueInput
  }

  /**
   * TimeLog updateMany
   */
  export type TimeLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeLogs.
     */
    data: XOR<TimeLogUpdateManyMutationInput, TimeLogUncheckedUpdateManyInput>
    /**
     * Filter which TimeLogs to update
     */
    where?: TimeLogWhereInput
    /**
     * Limit how many TimeLogs to update.
     */
    limit?: number
  }

  /**
   * TimeLog updateManyAndReturn
   */
  export type TimeLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * The data used to update TimeLogs.
     */
    data: XOR<TimeLogUpdateManyMutationInput, TimeLogUncheckedUpdateManyInput>
    /**
     * Filter which TimeLogs to update
     */
    where?: TimeLogWhereInput
    /**
     * Limit how many TimeLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeLog upsert
   */
  export type TimeLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeLog to update in case it exists.
     */
    where: TimeLogWhereUniqueInput
    /**
     * In case the TimeLog found by the `where` argument doesn't exist, create a new TimeLog with this data.
     */
    create: XOR<TimeLogCreateInput, TimeLogUncheckedCreateInput>
    /**
     * In case the TimeLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeLogUpdateInput, TimeLogUncheckedUpdateInput>
  }

  /**
   * TimeLog delete
   */
  export type TimeLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
    /**
     * Filter which TimeLog to delete.
     */
    where: TimeLogWhereUniqueInput
  }

  /**
   * TimeLog deleteMany
   */
  export type TimeLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeLogs to delete
     */
    where?: TimeLogWhereInput
    /**
     * Limit how many TimeLogs to delete.
     */
    limit?: number
  }

  /**
   * TimeLog without action
   */
  export type TimeLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeLog
     */
    select?: TimeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeLog
     */
    omit?: TimeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeLogInclude<ExtArgs> | null
  }


  /**
   * Model Voucher
   */

  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    passengerCount: number | null
    bonusAmount: number | null
  }

  export type VoucherSumAggregateOutputType = {
    passengerCount: number | null
    bonusAmount: number | null
  }

  export type VoucherMinAggregateOutputType = {
    id: string | null
    userId: string | null
    cardNumber: string | null
    room: string | null
    passengerCount: number | null
    expiryDate: string | null
    bonusAmount: number | null
    status: $Enums.VoucherStatus | null
    declineReason: string | null
    declinedAt: Date | null
    scannedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoucherMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    cardNumber: string | null
    room: string | null
    passengerCount: number | null
    expiryDate: string | null
    bonusAmount: number | null
    status: $Enums.VoucherStatus | null
    declineReason: string | null
    declinedAt: Date | null
    scannedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoucherCountAggregateOutputType = {
    id: number
    userId: number
    cardNumber: number
    room: number
    passengerCount: number
    expiryDate: number
    bonusAmount: number
    status: number
    declineReason: number
    declinedAt: number
    scannedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    passengerCount?: true
    bonusAmount?: true
  }

  export type VoucherSumAggregateInputType = {
    passengerCount?: true
    bonusAmount?: true
  }

  export type VoucherMinAggregateInputType = {
    id?: true
    userId?: true
    cardNumber?: true
    room?: true
    passengerCount?: true
    expiryDate?: true
    bonusAmount?: true
    status?: true
    declineReason?: true
    declinedAt?: true
    scannedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoucherMaxAggregateInputType = {
    id?: true
    userId?: true
    cardNumber?: true
    room?: true
    passengerCount?: true
    expiryDate?: true
    bonusAmount?: true
    status?: true
    declineReason?: true
    declinedAt?: true
    scannedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoucherCountAggregateInputType = {
    id?: true
    userId?: true
    cardNumber?: true
    room?: true
    passengerCount?: true
    expiryDate?: true
    bonusAmount?: true
    status?: true
    declineReason?: true
    declinedAt?: true
    scannedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithAggregationInput | VoucherOrderByWithAggregationInput[]
    by: VoucherScalarFieldEnum[] | VoucherScalarFieldEnum
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }

  export type VoucherGroupByOutputType = {
    id: string
    userId: string
    cardNumber: string
    room: string
    passengerCount: number
    expiryDate: string | null
    bonusAmount: number
    status: $Enums.VoucherStatus
    declineReason: string | null
    declinedAt: Date | null
    scannedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardNumber?: boolean
    room?: boolean
    passengerCount?: boolean
    expiryDate?: boolean
    bonusAmount?: boolean
    status?: boolean
    declineReason?: boolean
    declinedAt?: boolean
    scannedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardNumber?: boolean
    room?: boolean
    passengerCount?: boolean
    expiryDate?: boolean
    bonusAmount?: boolean
    status?: boolean
    declineReason?: boolean
    declinedAt?: boolean
    scannedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardNumber?: boolean
    room?: boolean
    passengerCount?: boolean
    expiryDate?: boolean
    bonusAmount?: boolean
    status?: boolean
    declineReason?: boolean
    declinedAt?: boolean
    scannedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectScalar = {
    id?: boolean
    userId?: boolean
    cardNumber?: boolean
    room?: boolean
    passengerCount?: boolean
    expiryDate?: boolean
    bonusAmount?: boolean
    status?: boolean
    declineReason?: boolean
    declinedAt?: boolean
    scannedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "cardNumber" | "room" | "passengerCount" | "expiryDate" | "bonusAmount" | "status" | "declineReason" | "declinedAt" | "scannedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["voucher"]>
  export type VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoucherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voucher"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      cardNumber: string
      room: string
      passengerCount: number
      expiryDate: string | null
      bonusAmount: number
      status: $Enums.VoucherStatus
      declineReason: string | null
      declinedAt: Date | null
      scannedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["voucher"]>
    composites: {}
  }

  type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = $Result.GetResult<Prisma.$VoucherPayload, S>

  type VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voucher'], meta: { name: 'Voucher' } }
    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherFindUniqueArgs>(args: SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherFindFirstArgs>(args?: SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucherWithIdOnly = await prisma.voucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoucherFindManyArgs>(args?: SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
     */
    create<T extends VoucherCreateArgs>(args: SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherCreateManyArgs>(args?: SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {VoucherCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, VoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
     */
    delete<T extends VoucherDeleteArgs>(args: SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherUpdateArgs>(args: SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherDeleteManyArgs>(args?: SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherUpdateManyArgs>(args: SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers and returns the data updated in the database.
     * @param {VoucherUpdateManyAndReturnArgs} args - Arguments to update many Vouchers.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoucherUpdateManyAndReturnArgs>(args: SelectSubset<T, VoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
     */
    upsert<T extends VoucherUpsertArgs>(args: SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voucher model
   */
  readonly fields: VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Voucher model
   */
  interface VoucherFieldRefs {
    readonly id: FieldRef<"Voucher", 'String'>
    readonly userId: FieldRef<"Voucher", 'String'>
    readonly cardNumber: FieldRef<"Voucher", 'String'>
    readonly room: FieldRef<"Voucher", 'String'>
    readonly passengerCount: FieldRef<"Voucher", 'Int'>
    readonly expiryDate: FieldRef<"Voucher", 'String'>
    readonly bonusAmount: FieldRef<"Voucher", 'Float'>
    readonly status: FieldRef<"Voucher", 'VoucherStatus'>
    readonly declineReason: FieldRef<"Voucher", 'String'>
    readonly declinedAt: FieldRef<"Voucher", 'DateTime'>
    readonly scannedAt: FieldRef<"Voucher", 'DateTime'>
    readonly createdAt: FieldRef<"Voucher", 'DateTime'>
    readonly updatedAt: FieldRef<"Voucher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Voucher findUnique
   */
  export type VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findFirst
   */
  export type VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher create
   */
  export type VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }

  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher createManyAndReturn
   */
  export type VoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher update
   */
  export type VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Voucher updateManyAndReturn
   */
  export type VoucherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }

  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Voucher without action
   */
  export type VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
  }


  /**
   * Model VoucherLog
   */

  export type AggregateVoucherLog = {
    _count: VoucherLogCountAggregateOutputType | null
    _min: VoucherLogMinAggregateOutputType | null
    _max: VoucherLogMaxAggregateOutputType | null
  }

  export type VoucherLogMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    voucherId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type VoucherLogMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    voucherId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type VoucherLogCountAggregateOutputType = {
    id: number
    employeeId: number
    voucherId: number
    action: number
    details: number
    createdAt: number
    _all: number
  }


  export type VoucherLogMinAggregateInputType = {
    id?: true
    employeeId?: true
    voucherId?: true
    action?: true
    createdAt?: true
  }

  export type VoucherLogMaxAggregateInputType = {
    id?: true
    employeeId?: true
    voucherId?: true
    action?: true
    createdAt?: true
  }

  export type VoucherLogCountAggregateInputType = {
    id?: true
    employeeId?: true
    voucherId?: true
    action?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type VoucherLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoucherLog to aggregate.
     */
    where?: VoucherLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoucherLogs to fetch.
     */
    orderBy?: VoucherLogOrderByWithRelationInput | VoucherLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoucherLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoucherLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VoucherLogs
    **/
    _count?: true | VoucherLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherLogMaxAggregateInputType
  }

  export type GetVoucherLogAggregateType<T extends VoucherLogAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucherLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucherLog[P]>
      : GetScalarType<T[P], AggregateVoucherLog[P]>
  }




  export type VoucherLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherLogWhereInput
    orderBy?: VoucherLogOrderByWithAggregationInput | VoucherLogOrderByWithAggregationInput[]
    by: VoucherLogScalarFieldEnum[] | VoucherLogScalarFieldEnum
    having?: VoucherLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherLogCountAggregateInputType | true
    _min?: VoucherLogMinAggregateInputType
    _max?: VoucherLogMaxAggregateInputType
  }

  export type VoucherLogGroupByOutputType = {
    id: string
    employeeId: string
    voucherId: string
    action: string
    details: JsonValue
    createdAt: Date
    _count: VoucherLogCountAggregateOutputType | null
    _min: VoucherLogMinAggregateOutputType | null
    _max: VoucherLogMaxAggregateOutputType | null
  }

  type GetVoucherLogGroupByPayload<T extends VoucherLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherLogGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherLogGroupByOutputType[P]>
        }
      >
    >


  export type VoucherLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    voucherId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucherLog"]>

  export type VoucherLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    voucherId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucherLog"]>

  export type VoucherLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    voucherId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucherLog"]>

  export type VoucherLogSelectScalar = {
    id?: boolean
    employeeId?: boolean
    voucherId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type VoucherLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "voucherId" | "action" | "details" | "createdAt", ExtArgs["result"]["voucherLog"]>
  export type VoucherLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type VoucherLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type VoucherLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $VoucherLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VoucherLog"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      voucherId: string
      action: string
      details: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["voucherLog"]>
    composites: {}
  }

  type VoucherLogGetPayload<S extends boolean | null | undefined | VoucherLogDefaultArgs> = $Result.GetResult<Prisma.$VoucherLogPayload, S>

  type VoucherLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoucherLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoucherLogCountAggregateInputType | true
    }

  export interface VoucherLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VoucherLog'], meta: { name: 'VoucherLog' } }
    /**
     * Find zero or one VoucherLog that matches the filter.
     * @param {VoucherLogFindUniqueArgs} args - Arguments to find a VoucherLog
     * @example
     * // Get one VoucherLog
     * const voucherLog = await prisma.voucherLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherLogFindUniqueArgs>(args: SelectSubset<T, VoucherLogFindUniqueArgs<ExtArgs>>): Prisma__VoucherLogClient<$Result.GetResult<Prisma.$VoucherLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VoucherLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoucherLogFindUniqueOrThrowArgs} args - Arguments to find a VoucherLog
     * @example
     * // Get one VoucherLog
     * const voucherLog = await prisma.voucherLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherLogFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherLogClient<$Result.GetResult<Prisma.$VoucherLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoucherLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherLogFindFirstArgs} args - Arguments to find a VoucherLog
     * @example
     * // Get one VoucherLog
     * const voucherLog = await prisma.voucherLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherLogFindFirstArgs>(args?: SelectSubset<T, VoucherLogFindFirstArgs<ExtArgs>>): Prisma__VoucherLogClient<$Result.GetResult<Prisma.$VoucherLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoucherLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherLogFindFirstOrThrowArgs} args - Arguments to find a VoucherLog
     * @example
     * // Get one VoucherLog
     * const voucherLog = await prisma.voucherLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherLogFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherLogClient<$Result.GetResult<Prisma.$VoucherLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VoucherLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VoucherLogs
     * const voucherLogs = await prisma.voucherLog.findMany()
     * 
     * // Get first 10 VoucherLogs
     * const voucherLogs = await prisma.voucherLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucherLogWithIdOnly = await prisma.voucherLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoucherLogFindManyArgs>(args?: SelectSubset<T, VoucherLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VoucherLog.
     * @param {VoucherLogCreateArgs} args - Arguments to create a VoucherLog.
     * @example
     * // Create one VoucherLog
     * const VoucherLog = await prisma.voucherLog.create({
     *   data: {
     *     // ... data to create a VoucherLog
     *   }
     * })
     * 
     */
    create<T extends VoucherLogCreateArgs>(args: SelectSubset<T, VoucherLogCreateArgs<ExtArgs>>): Prisma__VoucherLogClient<$Result.GetResult<Prisma.$VoucherLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VoucherLogs.
     * @param {VoucherLogCreateManyArgs} args - Arguments to create many VoucherLogs.
     * @example
     * // Create many VoucherLogs
     * const voucherLog = await prisma.voucherLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherLogCreateManyArgs>(args?: SelectSubset<T, VoucherLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VoucherLogs and returns the data saved in the database.
     * @param {VoucherLogCreateManyAndReturnArgs} args - Arguments to create many VoucherLogs.
     * @example
     * // Create many VoucherLogs
     * const voucherLog = await prisma.voucherLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VoucherLogs and only return the `id`
     * const voucherLogWithIdOnly = await prisma.voucherLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoucherLogCreateManyAndReturnArgs>(args?: SelectSubset<T, VoucherLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VoucherLog.
     * @param {VoucherLogDeleteArgs} args - Arguments to delete one VoucherLog.
     * @example
     * // Delete one VoucherLog
     * const VoucherLog = await prisma.voucherLog.delete({
     *   where: {
     *     // ... filter to delete one VoucherLog
     *   }
     * })
     * 
     */
    delete<T extends VoucherLogDeleteArgs>(args: SelectSubset<T, VoucherLogDeleteArgs<ExtArgs>>): Prisma__VoucherLogClient<$Result.GetResult<Prisma.$VoucherLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VoucherLog.
     * @param {VoucherLogUpdateArgs} args - Arguments to update one VoucherLog.
     * @example
     * // Update one VoucherLog
     * const voucherLog = await prisma.voucherLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherLogUpdateArgs>(args: SelectSubset<T, VoucherLogUpdateArgs<ExtArgs>>): Prisma__VoucherLogClient<$Result.GetResult<Prisma.$VoucherLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VoucherLogs.
     * @param {VoucherLogDeleteManyArgs} args - Arguments to filter VoucherLogs to delete.
     * @example
     * // Delete a few VoucherLogs
     * const { count } = await prisma.voucherLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherLogDeleteManyArgs>(args?: SelectSubset<T, VoucherLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoucherLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VoucherLogs
     * const voucherLog = await prisma.voucherLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherLogUpdateManyArgs>(args: SelectSubset<T, VoucherLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoucherLogs and returns the data updated in the database.
     * @param {VoucherLogUpdateManyAndReturnArgs} args - Arguments to update many VoucherLogs.
     * @example
     * // Update many VoucherLogs
     * const voucherLog = await prisma.voucherLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VoucherLogs and only return the `id`
     * const voucherLogWithIdOnly = await prisma.voucherLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoucherLogUpdateManyAndReturnArgs>(args: SelectSubset<T, VoucherLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VoucherLog.
     * @param {VoucherLogUpsertArgs} args - Arguments to update or create a VoucherLog.
     * @example
     * // Update or create a VoucherLog
     * const voucherLog = await prisma.voucherLog.upsert({
     *   create: {
     *     // ... data to create a VoucherLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VoucherLog we want to update
     *   }
     * })
     */
    upsert<T extends VoucherLogUpsertArgs>(args: SelectSubset<T, VoucherLogUpsertArgs<ExtArgs>>): Prisma__VoucherLogClient<$Result.GetResult<Prisma.$VoucherLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VoucherLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherLogCountArgs} args - Arguments to filter VoucherLogs to count.
     * @example
     * // Count the number of VoucherLogs
     * const count = await prisma.voucherLog.count({
     *   where: {
     *     // ... the filter for the VoucherLogs we want to count
     *   }
     * })
    **/
    count<T extends VoucherLogCountArgs>(
      args?: Subset<T, VoucherLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VoucherLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoucherLogAggregateArgs>(args: Subset<T, VoucherLogAggregateArgs>): Prisma.PrismaPromise<GetVoucherLogAggregateType<T>>

    /**
     * Group by VoucherLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoucherLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherLogGroupByArgs['orderBy'] }
        : { orderBy?: VoucherLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoucherLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VoucherLog model
   */
  readonly fields: VoucherLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VoucherLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VoucherLog model
   */
  interface VoucherLogFieldRefs {
    readonly id: FieldRef<"VoucherLog", 'String'>
    readonly employeeId: FieldRef<"VoucherLog", 'String'>
    readonly voucherId: FieldRef<"VoucherLog", 'String'>
    readonly action: FieldRef<"VoucherLog", 'String'>
    readonly details: FieldRef<"VoucherLog", 'Json'>
    readonly createdAt: FieldRef<"VoucherLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VoucherLog findUnique
   */
  export type VoucherLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogInclude<ExtArgs> | null
    /**
     * Filter, which VoucherLog to fetch.
     */
    where: VoucherLogWhereUniqueInput
  }

  /**
   * VoucherLog findUniqueOrThrow
   */
  export type VoucherLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogInclude<ExtArgs> | null
    /**
     * Filter, which VoucherLog to fetch.
     */
    where: VoucherLogWhereUniqueInput
  }

  /**
   * VoucherLog findFirst
   */
  export type VoucherLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogInclude<ExtArgs> | null
    /**
     * Filter, which VoucherLog to fetch.
     */
    where?: VoucherLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoucherLogs to fetch.
     */
    orderBy?: VoucherLogOrderByWithRelationInput | VoucherLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoucherLogs.
     */
    cursor?: VoucherLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoucherLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoucherLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoucherLogs.
     */
    distinct?: VoucherLogScalarFieldEnum | VoucherLogScalarFieldEnum[]
  }

  /**
   * VoucherLog findFirstOrThrow
   */
  export type VoucherLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogInclude<ExtArgs> | null
    /**
     * Filter, which VoucherLog to fetch.
     */
    where?: VoucherLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoucherLogs to fetch.
     */
    orderBy?: VoucherLogOrderByWithRelationInput | VoucherLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoucherLogs.
     */
    cursor?: VoucherLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoucherLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoucherLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoucherLogs.
     */
    distinct?: VoucherLogScalarFieldEnum | VoucherLogScalarFieldEnum[]
  }

  /**
   * VoucherLog findMany
   */
  export type VoucherLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogInclude<ExtArgs> | null
    /**
     * Filter, which VoucherLogs to fetch.
     */
    where?: VoucherLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoucherLogs to fetch.
     */
    orderBy?: VoucherLogOrderByWithRelationInput | VoucherLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VoucherLogs.
     */
    cursor?: VoucherLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoucherLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoucherLogs.
     */
    skip?: number
    distinct?: VoucherLogScalarFieldEnum | VoucherLogScalarFieldEnum[]
  }

  /**
   * VoucherLog create
   */
  export type VoucherLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogInclude<ExtArgs> | null
    /**
     * The data needed to create a VoucherLog.
     */
    data: XOR<VoucherLogCreateInput, VoucherLogUncheckedCreateInput>
  }

  /**
   * VoucherLog createMany
   */
  export type VoucherLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VoucherLogs.
     */
    data: VoucherLogCreateManyInput | VoucherLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VoucherLog createManyAndReturn
   */
  export type VoucherLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * The data used to create many VoucherLogs.
     */
    data: VoucherLogCreateManyInput | VoucherLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VoucherLog update
   */
  export type VoucherLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogInclude<ExtArgs> | null
    /**
     * The data needed to update a VoucherLog.
     */
    data: XOR<VoucherLogUpdateInput, VoucherLogUncheckedUpdateInput>
    /**
     * Choose, which VoucherLog to update.
     */
    where: VoucherLogWhereUniqueInput
  }

  /**
   * VoucherLog updateMany
   */
  export type VoucherLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VoucherLogs.
     */
    data: XOR<VoucherLogUpdateManyMutationInput, VoucherLogUncheckedUpdateManyInput>
    /**
     * Filter which VoucherLogs to update
     */
    where?: VoucherLogWhereInput
    /**
     * Limit how many VoucherLogs to update.
     */
    limit?: number
  }

  /**
   * VoucherLog updateManyAndReturn
   */
  export type VoucherLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * The data used to update VoucherLogs.
     */
    data: XOR<VoucherLogUpdateManyMutationInput, VoucherLogUncheckedUpdateManyInput>
    /**
     * Filter which VoucherLogs to update
     */
    where?: VoucherLogWhereInput
    /**
     * Limit how many VoucherLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VoucherLog upsert
   */
  export type VoucherLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogInclude<ExtArgs> | null
    /**
     * The filter to search for the VoucherLog to update in case it exists.
     */
    where: VoucherLogWhereUniqueInput
    /**
     * In case the VoucherLog found by the `where` argument doesn't exist, create a new VoucherLog with this data.
     */
    create: XOR<VoucherLogCreateInput, VoucherLogUncheckedCreateInput>
    /**
     * In case the VoucherLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherLogUpdateInput, VoucherLogUncheckedUpdateInput>
  }

  /**
   * VoucherLog delete
   */
  export type VoucherLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogInclude<ExtArgs> | null
    /**
     * Filter which VoucherLog to delete.
     */
    where: VoucherLogWhereUniqueInput
  }

  /**
   * VoucherLog deleteMany
   */
  export type VoucherLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoucherLogs to delete
     */
    where?: VoucherLogWhereInput
    /**
     * Limit how many VoucherLogs to delete.
     */
    limit?: number
  }

  /**
   * VoucherLog without action
   */
  export type VoucherLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherLog
     */
    select?: VoucherLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoucherLog
     */
    omit?: VoucherLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherLogInclude<ExtArgs> | null
  }


  /**
   * Model PayPeriod
   */

  export type AggregatePayPeriod = {
    _count: PayPeriodCountAggregateOutputType | null
    _min: PayPeriodMinAggregateOutputType | null
    _max: PayPeriodMaxAggregateOutputType | null
  }

  export type PayPeriodMinAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.PayPeriodStatus | null
    finalized: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayPeriodMaxAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.PayPeriodStatus | null
    finalized: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayPeriodCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    status: number
    finalized: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayPeriodMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    status?: true
    finalized?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayPeriodMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    status?: true
    finalized?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayPeriodCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    status?: true
    finalized?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayPeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayPeriod to aggregate.
     */
    where?: PayPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayPeriods to fetch.
     */
    orderBy?: PayPeriodOrderByWithRelationInput | PayPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayPeriods
    **/
    _count?: true | PayPeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayPeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayPeriodMaxAggregateInputType
  }

  export type GetPayPeriodAggregateType<T extends PayPeriodAggregateArgs> = {
        [P in keyof T & keyof AggregatePayPeriod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayPeriod[P]>
      : GetScalarType<T[P], AggregatePayPeriod[P]>
  }




  export type PayPeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayPeriodWhereInput
    orderBy?: PayPeriodOrderByWithAggregationInput | PayPeriodOrderByWithAggregationInput[]
    by: PayPeriodScalarFieldEnum[] | PayPeriodScalarFieldEnum
    having?: PayPeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayPeriodCountAggregateInputType | true
    _min?: PayPeriodMinAggregateInputType
    _max?: PayPeriodMaxAggregateInputType
  }

  export type PayPeriodGroupByOutputType = {
    id: string
    startDate: Date
    endDate: Date
    status: $Enums.PayPeriodStatus
    finalized: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PayPeriodCountAggregateOutputType | null
    _min: PayPeriodMinAggregateOutputType | null
    _max: PayPeriodMaxAggregateOutputType | null
  }

  type GetPayPeriodGroupByPayload<T extends PayPeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayPeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayPeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayPeriodGroupByOutputType[P]>
            : GetScalarType<T[P], PayPeriodGroupByOutputType[P]>
        }
      >
    >


  export type PayPeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    finalized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payPeriod"]>

  export type PayPeriodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    finalized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payPeriod"]>

  export type PayPeriodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    finalized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payPeriod"]>

  export type PayPeriodSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    finalized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayPeriodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "status" | "finalized" | "createdAt" | "updatedAt", ExtArgs["result"]["payPeriod"]>

  export type $PayPeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayPeriod"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startDate: Date
      endDate: Date
      status: $Enums.PayPeriodStatus
      finalized: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payPeriod"]>
    composites: {}
  }

  type PayPeriodGetPayload<S extends boolean | null | undefined | PayPeriodDefaultArgs> = $Result.GetResult<Prisma.$PayPeriodPayload, S>

  type PayPeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayPeriodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayPeriodCountAggregateInputType | true
    }

  export interface PayPeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayPeriod'], meta: { name: 'PayPeriod' } }
    /**
     * Find zero or one PayPeriod that matches the filter.
     * @param {PayPeriodFindUniqueArgs} args - Arguments to find a PayPeriod
     * @example
     * // Get one PayPeriod
     * const payPeriod = await prisma.payPeriod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayPeriodFindUniqueArgs>(args: SelectSubset<T, PayPeriodFindUniqueArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayPeriod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayPeriodFindUniqueOrThrowArgs} args - Arguments to find a PayPeriod
     * @example
     * // Get one PayPeriod
     * const payPeriod = await prisma.payPeriod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayPeriodFindUniqueOrThrowArgs>(args: SelectSubset<T, PayPeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayPeriod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodFindFirstArgs} args - Arguments to find a PayPeriod
     * @example
     * // Get one PayPeriod
     * const payPeriod = await prisma.payPeriod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayPeriodFindFirstArgs>(args?: SelectSubset<T, PayPeriodFindFirstArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayPeriod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodFindFirstOrThrowArgs} args - Arguments to find a PayPeriod
     * @example
     * // Get one PayPeriod
     * const payPeriod = await prisma.payPeriod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayPeriodFindFirstOrThrowArgs>(args?: SelectSubset<T, PayPeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayPeriods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayPeriods
     * const payPeriods = await prisma.payPeriod.findMany()
     * 
     * // Get first 10 PayPeriods
     * const payPeriods = await prisma.payPeriod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payPeriodWithIdOnly = await prisma.payPeriod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayPeriodFindManyArgs>(args?: SelectSubset<T, PayPeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayPeriod.
     * @param {PayPeriodCreateArgs} args - Arguments to create a PayPeriod.
     * @example
     * // Create one PayPeriod
     * const PayPeriod = await prisma.payPeriod.create({
     *   data: {
     *     // ... data to create a PayPeriod
     *   }
     * })
     * 
     */
    create<T extends PayPeriodCreateArgs>(args: SelectSubset<T, PayPeriodCreateArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayPeriods.
     * @param {PayPeriodCreateManyArgs} args - Arguments to create many PayPeriods.
     * @example
     * // Create many PayPeriods
     * const payPeriod = await prisma.payPeriod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayPeriodCreateManyArgs>(args?: SelectSubset<T, PayPeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayPeriods and returns the data saved in the database.
     * @param {PayPeriodCreateManyAndReturnArgs} args - Arguments to create many PayPeriods.
     * @example
     * // Create many PayPeriods
     * const payPeriod = await prisma.payPeriod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayPeriods and only return the `id`
     * const payPeriodWithIdOnly = await prisma.payPeriod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayPeriodCreateManyAndReturnArgs>(args?: SelectSubset<T, PayPeriodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayPeriod.
     * @param {PayPeriodDeleteArgs} args - Arguments to delete one PayPeriod.
     * @example
     * // Delete one PayPeriod
     * const PayPeriod = await prisma.payPeriod.delete({
     *   where: {
     *     // ... filter to delete one PayPeriod
     *   }
     * })
     * 
     */
    delete<T extends PayPeriodDeleteArgs>(args: SelectSubset<T, PayPeriodDeleteArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayPeriod.
     * @param {PayPeriodUpdateArgs} args - Arguments to update one PayPeriod.
     * @example
     * // Update one PayPeriod
     * const payPeriod = await prisma.payPeriod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayPeriodUpdateArgs>(args: SelectSubset<T, PayPeriodUpdateArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayPeriods.
     * @param {PayPeriodDeleteManyArgs} args - Arguments to filter PayPeriods to delete.
     * @example
     * // Delete a few PayPeriods
     * const { count } = await prisma.payPeriod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayPeriodDeleteManyArgs>(args?: SelectSubset<T, PayPeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayPeriods
     * const payPeriod = await prisma.payPeriod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayPeriodUpdateManyArgs>(args: SelectSubset<T, PayPeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayPeriods and returns the data updated in the database.
     * @param {PayPeriodUpdateManyAndReturnArgs} args - Arguments to update many PayPeriods.
     * @example
     * // Update many PayPeriods
     * const payPeriod = await prisma.payPeriod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayPeriods and only return the `id`
     * const payPeriodWithIdOnly = await prisma.payPeriod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayPeriodUpdateManyAndReturnArgs>(args: SelectSubset<T, PayPeriodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayPeriod.
     * @param {PayPeriodUpsertArgs} args - Arguments to update or create a PayPeriod.
     * @example
     * // Update or create a PayPeriod
     * const payPeriod = await prisma.payPeriod.upsert({
     *   create: {
     *     // ... data to create a PayPeriod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayPeriod we want to update
     *   }
     * })
     */
    upsert<T extends PayPeriodUpsertArgs>(args: SelectSubset<T, PayPeriodUpsertArgs<ExtArgs>>): Prisma__PayPeriodClient<$Result.GetResult<Prisma.$PayPeriodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodCountArgs} args - Arguments to filter PayPeriods to count.
     * @example
     * // Count the number of PayPeriods
     * const count = await prisma.payPeriod.count({
     *   where: {
     *     // ... the filter for the PayPeriods we want to count
     *   }
     * })
    **/
    count<T extends PayPeriodCountArgs>(
      args?: Subset<T, PayPeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayPeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayPeriodAggregateArgs>(args: Subset<T, PayPeriodAggregateArgs>): Prisma.PrismaPromise<GetPayPeriodAggregateType<T>>

    /**
     * Group by PayPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayPeriodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayPeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayPeriodGroupByArgs['orderBy'] }
        : { orderBy?: PayPeriodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayPeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayPeriod model
   */
  readonly fields: PayPeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayPeriod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayPeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayPeriod model
   */
  interface PayPeriodFieldRefs {
    readonly id: FieldRef<"PayPeriod", 'String'>
    readonly startDate: FieldRef<"PayPeriod", 'DateTime'>
    readonly endDate: FieldRef<"PayPeriod", 'DateTime'>
    readonly status: FieldRef<"PayPeriod", 'PayPeriodStatus'>
    readonly finalized: FieldRef<"PayPeriod", 'DateTime'>
    readonly createdAt: FieldRef<"PayPeriod", 'DateTime'>
    readonly updatedAt: FieldRef<"PayPeriod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayPeriod findUnique
   */
  export type PayPeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Filter, which PayPeriod to fetch.
     */
    where: PayPeriodWhereUniqueInput
  }

  /**
   * PayPeriod findUniqueOrThrow
   */
  export type PayPeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Filter, which PayPeriod to fetch.
     */
    where: PayPeriodWhereUniqueInput
  }

  /**
   * PayPeriod findFirst
   */
  export type PayPeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Filter, which PayPeriod to fetch.
     */
    where?: PayPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayPeriods to fetch.
     */
    orderBy?: PayPeriodOrderByWithRelationInput | PayPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayPeriods.
     */
    cursor?: PayPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayPeriods.
     */
    distinct?: PayPeriodScalarFieldEnum | PayPeriodScalarFieldEnum[]
  }

  /**
   * PayPeriod findFirstOrThrow
   */
  export type PayPeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Filter, which PayPeriod to fetch.
     */
    where?: PayPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayPeriods to fetch.
     */
    orderBy?: PayPeriodOrderByWithRelationInput | PayPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayPeriods.
     */
    cursor?: PayPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayPeriods.
     */
    distinct?: PayPeriodScalarFieldEnum | PayPeriodScalarFieldEnum[]
  }

  /**
   * PayPeriod findMany
   */
  export type PayPeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Filter, which PayPeriods to fetch.
     */
    where?: PayPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayPeriods to fetch.
     */
    orderBy?: PayPeriodOrderByWithRelationInput | PayPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayPeriods.
     */
    cursor?: PayPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayPeriods.
     */
    skip?: number
    distinct?: PayPeriodScalarFieldEnum | PayPeriodScalarFieldEnum[]
  }

  /**
   * PayPeriod create
   */
  export type PayPeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * The data needed to create a PayPeriod.
     */
    data: XOR<PayPeriodCreateInput, PayPeriodUncheckedCreateInput>
  }

  /**
   * PayPeriod createMany
   */
  export type PayPeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayPeriods.
     */
    data: PayPeriodCreateManyInput | PayPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayPeriod createManyAndReturn
   */
  export type PayPeriodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * The data used to create many PayPeriods.
     */
    data: PayPeriodCreateManyInput | PayPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayPeriod update
   */
  export type PayPeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * The data needed to update a PayPeriod.
     */
    data: XOR<PayPeriodUpdateInput, PayPeriodUncheckedUpdateInput>
    /**
     * Choose, which PayPeriod to update.
     */
    where: PayPeriodWhereUniqueInput
  }

  /**
   * PayPeriod updateMany
   */
  export type PayPeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayPeriods.
     */
    data: XOR<PayPeriodUpdateManyMutationInput, PayPeriodUncheckedUpdateManyInput>
    /**
     * Filter which PayPeriods to update
     */
    where?: PayPeriodWhereInput
    /**
     * Limit how many PayPeriods to update.
     */
    limit?: number
  }

  /**
   * PayPeriod updateManyAndReturn
   */
  export type PayPeriodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * The data used to update PayPeriods.
     */
    data: XOR<PayPeriodUpdateManyMutationInput, PayPeriodUncheckedUpdateManyInput>
    /**
     * Filter which PayPeriods to update
     */
    where?: PayPeriodWhereInput
    /**
     * Limit how many PayPeriods to update.
     */
    limit?: number
  }

  /**
   * PayPeriod upsert
   */
  export type PayPeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * The filter to search for the PayPeriod to update in case it exists.
     */
    where: PayPeriodWhereUniqueInput
    /**
     * In case the PayPeriod found by the `where` argument doesn't exist, create a new PayPeriod with this data.
     */
    create: XOR<PayPeriodCreateInput, PayPeriodUncheckedCreateInput>
    /**
     * In case the PayPeriod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayPeriodUpdateInput, PayPeriodUncheckedUpdateInput>
  }

  /**
   * PayPeriod delete
   */
  export type PayPeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
    /**
     * Filter which PayPeriod to delete.
     */
    where: PayPeriodWhereUniqueInput
  }

  /**
   * PayPeriod deleteMany
   */
  export type PayPeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayPeriods to delete
     */
    where?: PayPeriodWhereInput
    /**
     * Limit how many PayPeriods to delete.
     */
    limit?: number
  }

  /**
   * PayPeriod without action
   */
  export type PayPeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayPeriod
     */
    select?: PayPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayPeriod
     */
    omit?: PayPeriodOmit<ExtArgs> | null
  }


  /**
   * Model PayEstimate
   */

  export type AggregatePayEstimate = {
    _count: PayEstimateCountAggregateOutputType | null
    _avg: PayEstimateAvgAggregateOutputType | null
    _sum: PayEstimateSumAggregateOutputType | null
    _min: PayEstimateMinAggregateOutputType | null
    _max: PayEstimateMaxAggregateOutputType | null
  }

  export type PayEstimateAvgAggregateOutputType = {
    basePay: number | null
    tips: number | null
    roomBonus: number | null
    voucherBonus: number | null
    soldOutBonus: number | null
    totalEstimated: number | null
  }

  export type PayEstimateSumAggregateOutputType = {
    basePay: number | null
    tips: number | null
    roomBonus: number | null
    voucherBonus: number | null
    soldOutBonus: number | null
    totalEstimated: number | null
  }

  export type PayEstimateMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    payPeriodId: string | null
    basePay: number | null
    tips: number | null
    roomBonus: number | null
    voucherBonus: number | null
    soldOutBonus: number | null
    totalEstimated: number | null
    isFinalized: boolean | null
    finalizedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayEstimateMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    payPeriodId: string | null
    basePay: number | null
    tips: number | null
    roomBonus: number | null
    voucherBonus: number | null
    soldOutBonus: number | null
    totalEstimated: number | null
    isFinalized: boolean | null
    finalizedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayEstimateCountAggregateOutputType = {
    id: number
    employeeId: number
    payPeriodId: number
    basePay: number
    tips: number
    roomBonus: number
    voucherBonus: number
    soldOutBonus: number
    totalEstimated: number
    isFinalized: number
    finalizedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayEstimateAvgAggregateInputType = {
    basePay?: true
    tips?: true
    roomBonus?: true
    voucherBonus?: true
    soldOutBonus?: true
    totalEstimated?: true
  }

  export type PayEstimateSumAggregateInputType = {
    basePay?: true
    tips?: true
    roomBonus?: true
    voucherBonus?: true
    soldOutBonus?: true
    totalEstimated?: true
  }

  export type PayEstimateMinAggregateInputType = {
    id?: true
    employeeId?: true
    payPeriodId?: true
    basePay?: true
    tips?: true
    roomBonus?: true
    voucherBonus?: true
    soldOutBonus?: true
    totalEstimated?: true
    isFinalized?: true
    finalizedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayEstimateMaxAggregateInputType = {
    id?: true
    employeeId?: true
    payPeriodId?: true
    basePay?: true
    tips?: true
    roomBonus?: true
    voucherBonus?: true
    soldOutBonus?: true
    totalEstimated?: true
    isFinalized?: true
    finalizedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayEstimateCountAggregateInputType = {
    id?: true
    employeeId?: true
    payPeriodId?: true
    basePay?: true
    tips?: true
    roomBonus?: true
    voucherBonus?: true
    soldOutBonus?: true
    totalEstimated?: true
    isFinalized?: true
    finalizedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayEstimateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayEstimate to aggregate.
     */
    where?: PayEstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayEstimates to fetch.
     */
    orderBy?: PayEstimateOrderByWithRelationInput | PayEstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayEstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayEstimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayEstimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayEstimates
    **/
    _count?: true | PayEstimateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayEstimateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayEstimateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayEstimateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayEstimateMaxAggregateInputType
  }

  export type GetPayEstimateAggregateType<T extends PayEstimateAggregateArgs> = {
        [P in keyof T & keyof AggregatePayEstimate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayEstimate[P]>
      : GetScalarType<T[P], AggregatePayEstimate[P]>
  }




  export type PayEstimateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayEstimateWhereInput
    orderBy?: PayEstimateOrderByWithAggregationInput | PayEstimateOrderByWithAggregationInput[]
    by: PayEstimateScalarFieldEnum[] | PayEstimateScalarFieldEnum
    having?: PayEstimateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayEstimateCountAggregateInputType | true
    _avg?: PayEstimateAvgAggregateInputType
    _sum?: PayEstimateSumAggregateInputType
    _min?: PayEstimateMinAggregateInputType
    _max?: PayEstimateMaxAggregateInputType
  }

  export type PayEstimateGroupByOutputType = {
    id: string
    employeeId: string
    payPeriodId: string
    basePay: number
    tips: number
    roomBonus: number
    voucherBonus: number
    soldOutBonus: number
    totalEstimated: number
    isFinalized: boolean
    finalizedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PayEstimateCountAggregateOutputType | null
    _avg: PayEstimateAvgAggregateOutputType | null
    _sum: PayEstimateSumAggregateOutputType | null
    _min: PayEstimateMinAggregateOutputType | null
    _max: PayEstimateMaxAggregateOutputType | null
  }

  type GetPayEstimateGroupByPayload<T extends PayEstimateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayEstimateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayEstimateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayEstimateGroupByOutputType[P]>
            : GetScalarType<T[P], PayEstimateGroupByOutputType[P]>
        }
      >
    >


  export type PayEstimateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    payPeriodId?: boolean
    basePay?: boolean
    tips?: boolean
    roomBonus?: boolean
    voucherBonus?: boolean
    soldOutBonus?: boolean
    totalEstimated?: boolean
    isFinalized?: boolean
    finalizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payEstimate"]>

  export type PayEstimateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    payPeriodId?: boolean
    basePay?: boolean
    tips?: boolean
    roomBonus?: boolean
    voucherBonus?: boolean
    soldOutBonus?: boolean
    totalEstimated?: boolean
    isFinalized?: boolean
    finalizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payEstimate"]>

  export type PayEstimateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    payPeriodId?: boolean
    basePay?: boolean
    tips?: boolean
    roomBonus?: boolean
    voucherBonus?: boolean
    soldOutBonus?: boolean
    totalEstimated?: boolean
    isFinalized?: boolean
    finalizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payEstimate"]>

  export type PayEstimateSelectScalar = {
    id?: boolean
    employeeId?: boolean
    payPeriodId?: boolean
    basePay?: boolean
    tips?: boolean
    roomBonus?: boolean
    voucherBonus?: boolean
    soldOutBonus?: boolean
    totalEstimated?: boolean
    isFinalized?: boolean
    finalizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayEstimateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "payPeriodId" | "basePay" | "tips" | "roomBonus" | "voucherBonus" | "soldOutBonus" | "totalEstimated" | "isFinalized" | "finalizedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payEstimate"]>

  export type $PayEstimatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayEstimate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      payPeriodId: string
      basePay: number
      tips: number
      roomBonus: number
      voucherBonus: number
      soldOutBonus: number
      totalEstimated: number
      isFinalized: boolean
      finalizedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payEstimate"]>
    composites: {}
  }

  type PayEstimateGetPayload<S extends boolean | null | undefined | PayEstimateDefaultArgs> = $Result.GetResult<Prisma.$PayEstimatePayload, S>

  type PayEstimateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayEstimateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayEstimateCountAggregateInputType | true
    }

  export interface PayEstimateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayEstimate'], meta: { name: 'PayEstimate' } }
    /**
     * Find zero or one PayEstimate that matches the filter.
     * @param {PayEstimateFindUniqueArgs} args - Arguments to find a PayEstimate
     * @example
     * // Get one PayEstimate
     * const payEstimate = await prisma.payEstimate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayEstimateFindUniqueArgs>(args: SelectSubset<T, PayEstimateFindUniqueArgs<ExtArgs>>): Prisma__PayEstimateClient<$Result.GetResult<Prisma.$PayEstimatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayEstimate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayEstimateFindUniqueOrThrowArgs} args - Arguments to find a PayEstimate
     * @example
     * // Get one PayEstimate
     * const payEstimate = await prisma.payEstimate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayEstimateFindUniqueOrThrowArgs>(args: SelectSubset<T, PayEstimateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayEstimateClient<$Result.GetResult<Prisma.$PayEstimatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayEstimate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayEstimateFindFirstArgs} args - Arguments to find a PayEstimate
     * @example
     * // Get one PayEstimate
     * const payEstimate = await prisma.payEstimate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayEstimateFindFirstArgs>(args?: SelectSubset<T, PayEstimateFindFirstArgs<ExtArgs>>): Prisma__PayEstimateClient<$Result.GetResult<Prisma.$PayEstimatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayEstimate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayEstimateFindFirstOrThrowArgs} args - Arguments to find a PayEstimate
     * @example
     * // Get one PayEstimate
     * const payEstimate = await prisma.payEstimate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayEstimateFindFirstOrThrowArgs>(args?: SelectSubset<T, PayEstimateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayEstimateClient<$Result.GetResult<Prisma.$PayEstimatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayEstimates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayEstimateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayEstimates
     * const payEstimates = await prisma.payEstimate.findMany()
     * 
     * // Get first 10 PayEstimates
     * const payEstimates = await prisma.payEstimate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payEstimateWithIdOnly = await prisma.payEstimate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayEstimateFindManyArgs>(args?: SelectSubset<T, PayEstimateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayEstimatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayEstimate.
     * @param {PayEstimateCreateArgs} args - Arguments to create a PayEstimate.
     * @example
     * // Create one PayEstimate
     * const PayEstimate = await prisma.payEstimate.create({
     *   data: {
     *     // ... data to create a PayEstimate
     *   }
     * })
     * 
     */
    create<T extends PayEstimateCreateArgs>(args: SelectSubset<T, PayEstimateCreateArgs<ExtArgs>>): Prisma__PayEstimateClient<$Result.GetResult<Prisma.$PayEstimatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayEstimates.
     * @param {PayEstimateCreateManyArgs} args - Arguments to create many PayEstimates.
     * @example
     * // Create many PayEstimates
     * const payEstimate = await prisma.payEstimate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayEstimateCreateManyArgs>(args?: SelectSubset<T, PayEstimateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayEstimates and returns the data saved in the database.
     * @param {PayEstimateCreateManyAndReturnArgs} args - Arguments to create many PayEstimates.
     * @example
     * // Create many PayEstimates
     * const payEstimate = await prisma.payEstimate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayEstimates and only return the `id`
     * const payEstimateWithIdOnly = await prisma.payEstimate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayEstimateCreateManyAndReturnArgs>(args?: SelectSubset<T, PayEstimateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayEstimatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayEstimate.
     * @param {PayEstimateDeleteArgs} args - Arguments to delete one PayEstimate.
     * @example
     * // Delete one PayEstimate
     * const PayEstimate = await prisma.payEstimate.delete({
     *   where: {
     *     // ... filter to delete one PayEstimate
     *   }
     * })
     * 
     */
    delete<T extends PayEstimateDeleteArgs>(args: SelectSubset<T, PayEstimateDeleteArgs<ExtArgs>>): Prisma__PayEstimateClient<$Result.GetResult<Prisma.$PayEstimatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayEstimate.
     * @param {PayEstimateUpdateArgs} args - Arguments to update one PayEstimate.
     * @example
     * // Update one PayEstimate
     * const payEstimate = await prisma.payEstimate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayEstimateUpdateArgs>(args: SelectSubset<T, PayEstimateUpdateArgs<ExtArgs>>): Prisma__PayEstimateClient<$Result.GetResult<Prisma.$PayEstimatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayEstimates.
     * @param {PayEstimateDeleteManyArgs} args - Arguments to filter PayEstimates to delete.
     * @example
     * // Delete a few PayEstimates
     * const { count } = await prisma.payEstimate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayEstimateDeleteManyArgs>(args?: SelectSubset<T, PayEstimateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayEstimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayEstimateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayEstimates
     * const payEstimate = await prisma.payEstimate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayEstimateUpdateManyArgs>(args: SelectSubset<T, PayEstimateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayEstimates and returns the data updated in the database.
     * @param {PayEstimateUpdateManyAndReturnArgs} args - Arguments to update many PayEstimates.
     * @example
     * // Update many PayEstimates
     * const payEstimate = await prisma.payEstimate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayEstimates and only return the `id`
     * const payEstimateWithIdOnly = await prisma.payEstimate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayEstimateUpdateManyAndReturnArgs>(args: SelectSubset<T, PayEstimateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayEstimatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayEstimate.
     * @param {PayEstimateUpsertArgs} args - Arguments to update or create a PayEstimate.
     * @example
     * // Update or create a PayEstimate
     * const payEstimate = await prisma.payEstimate.upsert({
     *   create: {
     *     // ... data to create a PayEstimate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayEstimate we want to update
     *   }
     * })
     */
    upsert<T extends PayEstimateUpsertArgs>(args: SelectSubset<T, PayEstimateUpsertArgs<ExtArgs>>): Prisma__PayEstimateClient<$Result.GetResult<Prisma.$PayEstimatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayEstimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayEstimateCountArgs} args - Arguments to filter PayEstimates to count.
     * @example
     * // Count the number of PayEstimates
     * const count = await prisma.payEstimate.count({
     *   where: {
     *     // ... the filter for the PayEstimates we want to count
     *   }
     * })
    **/
    count<T extends PayEstimateCountArgs>(
      args?: Subset<T, PayEstimateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayEstimateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayEstimate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayEstimateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayEstimateAggregateArgs>(args: Subset<T, PayEstimateAggregateArgs>): Prisma.PrismaPromise<GetPayEstimateAggregateType<T>>

    /**
     * Group by PayEstimate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayEstimateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayEstimateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayEstimateGroupByArgs['orderBy'] }
        : { orderBy?: PayEstimateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayEstimateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayEstimateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayEstimate model
   */
  readonly fields: PayEstimateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayEstimate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayEstimateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayEstimate model
   */
  interface PayEstimateFieldRefs {
    readonly id: FieldRef<"PayEstimate", 'String'>
    readonly employeeId: FieldRef<"PayEstimate", 'String'>
    readonly payPeriodId: FieldRef<"PayEstimate", 'String'>
    readonly basePay: FieldRef<"PayEstimate", 'Float'>
    readonly tips: FieldRef<"PayEstimate", 'Float'>
    readonly roomBonus: FieldRef<"PayEstimate", 'Float'>
    readonly voucherBonus: FieldRef<"PayEstimate", 'Float'>
    readonly soldOutBonus: FieldRef<"PayEstimate", 'Float'>
    readonly totalEstimated: FieldRef<"PayEstimate", 'Float'>
    readonly isFinalized: FieldRef<"PayEstimate", 'Boolean'>
    readonly finalizedAt: FieldRef<"PayEstimate", 'DateTime'>
    readonly createdAt: FieldRef<"PayEstimate", 'DateTime'>
    readonly updatedAt: FieldRef<"PayEstimate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayEstimate findUnique
   */
  export type PayEstimateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayEstimate
     */
    select?: PayEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayEstimate
     */
    omit?: PayEstimateOmit<ExtArgs> | null
    /**
     * Filter, which PayEstimate to fetch.
     */
    where: PayEstimateWhereUniqueInput
  }

  /**
   * PayEstimate findUniqueOrThrow
   */
  export type PayEstimateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayEstimate
     */
    select?: PayEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayEstimate
     */
    omit?: PayEstimateOmit<ExtArgs> | null
    /**
     * Filter, which PayEstimate to fetch.
     */
    where: PayEstimateWhereUniqueInput
  }

  /**
   * PayEstimate findFirst
   */
  export type PayEstimateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayEstimate
     */
    select?: PayEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayEstimate
     */
    omit?: PayEstimateOmit<ExtArgs> | null
    /**
     * Filter, which PayEstimate to fetch.
     */
    where?: PayEstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayEstimates to fetch.
     */
    orderBy?: PayEstimateOrderByWithRelationInput | PayEstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayEstimates.
     */
    cursor?: PayEstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayEstimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayEstimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayEstimates.
     */
    distinct?: PayEstimateScalarFieldEnum | PayEstimateScalarFieldEnum[]
  }

  /**
   * PayEstimate findFirstOrThrow
   */
  export type PayEstimateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayEstimate
     */
    select?: PayEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayEstimate
     */
    omit?: PayEstimateOmit<ExtArgs> | null
    /**
     * Filter, which PayEstimate to fetch.
     */
    where?: PayEstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayEstimates to fetch.
     */
    orderBy?: PayEstimateOrderByWithRelationInput | PayEstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayEstimates.
     */
    cursor?: PayEstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayEstimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayEstimates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayEstimates.
     */
    distinct?: PayEstimateScalarFieldEnum | PayEstimateScalarFieldEnum[]
  }

  /**
   * PayEstimate findMany
   */
  export type PayEstimateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayEstimate
     */
    select?: PayEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayEstimate
     */
    omit?: PayEstimateOmit<ExtArgs> | null
    /**
     * Filter, which PayEstimates to fetch.
     */
    where?: PayEstimateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayEstimates to fetch.
     */
    orderBy?: PayEstimateOrderByWithRelationInput | PayEstimateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayEstimates.
     */
    cursor?: PayEstimateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayEstimates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayEstimates.
     */
    skip?: number
    distinct?: PayEstimateScalarFieldEnum | PayEstimateScalarFieldEnum[]
  }

  /**
   * PayEstimate create
   */
  export type PayEstimateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayEstimate
     */
    select?: PayEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayEstimate
     */
    omit?: PayEstimateOmit<ExtArgs> | null
    /**
     * The data needed to create a PayEstimate.
     */
    data: XOR<PayEstimateCreateInput, PayEstimateUncheckedCreateInput>
  }

  /**
   * PayEstimate createMany
   */
  export type PayEstimateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayEstimates.
     */
    data: PayEstimateCreateManyInput | PayEstimateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayEstimate createManyAndReturn
   */
  export type PayEstimateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayEstimate
     */
    select?: PayEstimateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayEstimate
     */
    omit?: PayEstimateOmit<ExtArgs> | null
    /**
     * The data used to create many PayEstimates.
     */
    data: PayEstimateCreateManyInput | PayEstimateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayEstimate update
   */
  export type PayEstimateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayEstimate
     */
    select?: PayEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayEstimate
     */
    omit?: PayEstimateOmit<ExtArgs> | null
    /**
     * The data needed to update a PayEstimate.
     */
    data: XOR<PayEstimateUpdateInput, PayEstimateUncheckedUpdateInput>
    /**
     * Choose, which PayEstimate to update.
     */
    where: PayEstimateWhereUniqueInput
  }

  /**
   * PayEstimate updateMany
   */
  export type PayEstimateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayEstimates.
     */
    data: XOR<PayEstimateUpdateManyMutationInput, PayEstimateUncheckedUpdateManyInput>
    /**
     * Filter which PayEstimates to update
     */
    where?: PayEstimateWhereInput
    /**
     * Limit how many PayEstimates to update.
     */
    limit?: number
  }

  /**
   * PayEstimate updateManyAndReturn
   */
  export type PayEstimateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayEstimate
     */
    select?: PayEstimateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayEstimate
     */
    omit?: PayEstimateOmit<ExtArgs> | null
    /**
     * The data used to update PayEstimates.
     */
    data: XOR<PayEstimateUpdateManyMutationInput, PayEstimateUncheckedUpdateManyInput>
    /**
     * Filter which PayEstimates to update
     */
    where?: PayEstimateWhereInput
    /**
     * Limit how many PayEstimates to update.
     */
    limit?: number
  }

  /**
   * PayEstimate upsert
   */
  export type PayEstimateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayEstimate
     */
    select?: PayEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayEstimate
     */
    omit?: PayEstimateOmit<ExtArgs> | null
    /**
     * The filter to search for the PayEstimate to update in case it exists.
     */
    where: PayEstimateWhereUniqueInput
    /**
     * In case the PayEstimate found by the `where` argument doesn't exist, create a new PayEstimate with this data.
     */
    create: XOR<PayEstimateCreateInput, PayEstimateUncheckedCreateInput>
    /**
     * In case the PayEstimate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayEstimateUpdateInput, PayEstimateUncheckedUpdateInput>
  }

  /**
   * PayEstimate delete
   */
  export type PayEstimateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayEstimate
     */
    select?: PayEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayEstimate
     */
    omit?: PayEstimateOmit<ExtArgs> | null
    /**
     * Filter which PayEstimate to delete.
     */
    where: PayEstimateWhereUniqueInput
  }

  /**
   * PayEstimate deleteMany
   */
  export type PayEstimateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayEstimates to delete
     */
    where?: PayEstimateWhereInput
    /**
     * Limit how many PayEstimates to delete.
     */
    limit?: number
  }

  /**
   * PayEstimate without action
   */
  export type PayEstimateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayEstimate
     */
    select?: PayEstimateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayEstimate
     */
    omit?: PayEstimateOmit<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    userId: string | null
    adminId: string | null
    entityType: string | null
    entityId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    userId: string | null
    adminId: string | null
    entityType: string | null
    entityId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    userId: number
    adminId: number
    entityType: number
    entityId: number
    changes: number
    reason: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    userId?: true
    adminId?: true
    entityType?: true
    entityId?: true
    reason?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    userId?: true
    adminId?: true
    entityType?: true
    entityId?: true
    reason?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    userId?: true
    adminId?: true
    entityType?: true
    entityId?: true
    changes?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    userId: string
    adminId: string | null
    entityType: string
    entityId: string
    changes: JsonValue
    reason: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    userId?: boolean
    adminId?: boolean
    entityType?: boolean
    entityId?: boolean
    changes?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    userId?: boolean
    adminId?: boolean
    entityType?: boolean
    entityId?: boolean
    changes?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    userId?: boolean
    adminId?: boolean
    entityType?: boolean
    entityId?: boolean
    changes?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    userId?: boolean
    adminId?: boolean
    entityType?: boolean
    entityId?: boolean
    changes?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "userId" | "adminId" | "entityType" | "entityId" | "changes" | "reason" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      userId: string
      adminId: string | null
      entityType: string
      entityId: string
      changes: Prisma.JsonValue
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly adminId: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly changes: FieldRef<"AuditLog", 'Json'>
    readonly reason: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model AppConfig
   */

  export type AggregateAppConfig = {
    _count: AppConfigCountAggregateOutputType | null
    _avg: AppConfigAvgAggregateOutputType | null
    _sum: AppConfigSumAggregateOutputType | null
    _min: AppConfigMinAggregateOutputType | null
    _max: AppConfigMaxAggregateOutputType | null
  }

  export type AppConfigAvgAggregateOutputType = {
    baseSoldOutBonus: number | null
    roomUpsellRate: number | null
    voucherBonusRate: number | null
  }

  export type AppConfigSumAggregateOutputType = {
    baseSoldOutBonus: number | null
    roomUpsellRate: number | null
    voucherBonusRate: number | null
  }

  export type AppConfigMinAggregateOutputType = {
    id: string | null
    enableVoucherScanning: boolean | null
    enableOfflineMode: boolean | null
    enableMultiSession: boolean | null
    baseSoldOutBonus: number | null
    roomUpsellRate: number | null
    voucherBonusRate: number | null
    updatedAt: Date | null
  }

  export type AppConfigMaxAggregateOutputType = {
    id: string | null
    enableVoucherScanning: boolean | null
    enableOfflineMode: boolean | null
    enableMultiSession: boolean | null
    baseSoldOutBonus: number | null
    roomUpsellRate: number | null
    voucherBonusRate: number | null
    updatedAt: Date | null
  }

  export type AppConfigCountAggregateOutputType = {
    id: number
    enableVoucherScanning: number
    enableOfflineMode: number
    enableMultiSession: number
    baseSoldOutBonus: number
    roomUpsellRate: number
    voucherBonusRate: number
    updatedAt: number
    _all: number
  }


  export type AppConfigAvgAggregateInputType = {
    baseSoldOutBonus?: true
    roomUpsellRate?: true
    voucherBonusRate?: true
  }

  export type AppConfigSumAggregateInputType = {
    baseSoldOutBonus?: true
    roomUpsellRate?: true
    voucherBonusRate?: true
  }

  export type AppConfigMinAggregateInputType = {
    id?: true
    enableVoucherScanning?: true
    enableOfflineMode?: true
    enableMultiSession?: true
    baseSoldOutBonus?: true
    roomUpsellRate?: true
    voucherBonusRate?: true
    updatedAt?: true
  }

  export type AppConfigMaxAggregateInputType = {
    id?: true
    enableVoucherScanning?: true
    enableOfflineMode?: true
    enableMultiSession?: true
    baseSoldOutBonus?: true
    roomUpsellRate?: true
    voucherBonusRate?: true
    updatedAt?: true
  }

  export type AppConfigCountAggregateInputType = {
    id?: true
    enableVoucherScanning?: true
    enableOfflineMode?: true
    enableMultiSession?: true
    baseSoldOutBonus?: true
    roomUpsellRate?: true
    voucherBonusRate?: true
    updatedAt?: true
    _all?: true
  }

  export type AppConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppConfig to aggregate.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppConfigs
    **/
    _count?: true | AppConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppConfigMaxAggregateInputType
  }

  export type GetAppConfigAggregateType<T extends AppConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateAppConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppConfig[P]>
      : GetScalarType<T[P], AggregateAppConfig[P]>
  }




  export type AppConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppConfigWhereInput
    orderBy?: AppConfigOrderByWithAggregationInput | AppConfigOrderByWithAggregationInput[]
    by: AppConfigScalarFieldEnum[] | AppConfigScalarFieldEnum
    having?: AppConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppConfigCountAggregateInputType | true
    _avg?: AppConfigAvgAggregateInputType
    _sum?: AppConfigSumAggregateInputType
    _min?: AppConfigMinAggregateInputType
    _max?: AppConfigMaxAggregateInputType
  }

  export type AppConfigGroupByOutputType = {
    id: string
    enableVoucherScanning: boolean
    enableOfflineMode: boolean
    enableMultiSession: boolean
    baseSoldOutBonus: number
    roomUpsellRate: number
    voucherBonusRate: number
    updatedAt: Date
    _count: AppConfigCountAggregateOutputType | null
    _avg: AppConfigAvgAggregateOutputType | null
    _sum: AppConfigSumAggregateOutputType | null
    _min: AppConfigMinAggregateOutputType | null
    _max: AppConfigMaxAggregateOutputType | null
  }

  type GetAppConfigGroupByPayload<T extends AppConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppConfigGroupByOutputType[P]>
            : GetScalarType<T[P], AppConfigGroupByOutputType[P]>
        }
      >
    >


  export type AppConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enableVoucherScanning?: boolean
    enableOfflineMode?: boolean
    enableMultiSession?: boolean
    baseSoldOutBonus?: boolean
    roomUpsellRate?: boolean
    voucherBonusRate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enableVoucherScanning?: boolean
    enableOfflineMode?: boolean
    enableMultiSession?: boolean
    baseSoldOutBonus?: boolean
    roomUpsellRate?: boolean
    voucherBonusRate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enableVoucherScanning?: boolean
    enableOfflineMode?: boolean
    enableMultiSession?: boolean
    baseSoldOutBonus?: boolean
    roomUpsellRate?: boolean
    voucherBonusRate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectScalar = {
    id?: boolean
    enableVoucherScanning?: boolean
    enableOfflineMode?: boolean
    enableMultiSession?: boolean
    baseSoldOutBonus?: boolean
    roomUpsellRate?: boolean
    voucherBonusRate?: boolean
    updatedAt?: boolean
  }

  export type AppConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enableVoucherScanning" | "enableOfflineMode" | "enableMultiSession" | "baseSoldOutBonus" | "roomUpsellRate" | "voucherBonusRate" | "updatedAt", ExtArgs["result"]["appConfig"]>

  export type $AppConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enableVoucherScanning: boolean
      enableOfflineMode: boolean
      enableMultiSession: boolean
      baseSoldOutBonus: number
      roomUpsellRate: number
      voucherBonusRate: number
      updatedAt: Date
    }, ExtArgs["result"]["appConfig"]>
    composites: {}
  }

  type AppConfigGetPayload<S extends boolean | null | undefined | AppConfigDefaultArgs> = $Result.GetResult<Prisma.$AppConfigPayload, S>

  type AppConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppConfigCountAggregateInputType | true
    }

  export interface AppConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppConfig'], meta: { name: 'AppConfig' } }
    /**
     * Find zero or one AppConfig that matches the filter.
     * @param {AppConfigFindUniqueArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppConfigFindUniqueArgs>(args: SelectSubset<T, AppConfigFindUniqueArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppConfigFindUniqueOrThrowArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, AppConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigFindFirstArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppConfigFindFirstArgs>(args?: SelectSubset<T, AppConfigFindFirstArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigFindFirstOrThrowArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, AppConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppConfigs
     * const appConfigs = await prisma.appConfig.findMany()
     * 
     * // Get first 10 AppConfigs
     * const appConfigs = await prisma.appConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appConfigWithIdOnly = await prisma.appConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppConfigFindManyArgs>(args?: SelectSubset<T, AppConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppConfig.
     * @param {AppConfigCreateArgs} args - Arguments to create a AppConfig.
     * @example
     * // Create one AppConfig
     * const AppConfig = await prisma.appConfig.create({
     *   data: {
     *     // ... data to create a AppConfig
     *   }
     * })
     * 
     */
    create<T extends AppConfigCreateArgs>(args: SelectSubset<T, AppConfigCreateArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppConfigs.
     * @param {AppConfigCreateManyArgs} args - Arguments to create many AppConfigs.
     * @example
     * // Create many AppConfigs
     * const appConfig = await prisma.appConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppConfigCreateManyArgs>(args?: SelectSubset<T, AppConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppConfigs and returns the data saved in the database.
     * @param {AppConfigCreateManyAndReturnArgs} args - Arguments to create many AppConfigs.
     * @example
     * // Create many AppConfigs
     * const appConfig = await prisma.appConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppConfigs and only return the `id`
     * const appConfigWithIdOnly = await prisma.appConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, AppConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppConfig.
     * @param {AppConfigDeleteArgs} args - Arguments to delete one AppConfig.
     * @example
     * // Delete one AppConfig
     * const AppConfig = await prisma.appConfig.delete({
     *   where: {
     *     // ... filter to delete one AppConfig
     *   }
     * })
     * 
     */
    delete<T extends AppConfigDeleteArgs>(args: SelectSubset<T, AppConfigDeleteArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppConfig.
     * @param {AppConfigUpdateArgs} args - Arguments to update one AppConfig.
     * @example
     * // Update one AppConfig
     * const appConfig = await prisma.appConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppConfigUpdateArgs>(args: SelectSubset<T, AppConfigUpdateArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppConfigs.
     * @param {AppConfigDeleteManyArgs} args - Arguments to filter AppConfigs to delete.
     * @example
     * // Delete a few AppConfigs
     * const { count } = await prisma.appConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppConfigDeleteManyArgs>(args?: SelectSubset<T, AppConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppConfigs
     * const appConfig = await prisma.appConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppConfigUpdateManyArgs>(args: SelectSubset<T, AppConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppConfigs and returns the data updated in the database.
     * @param {AppConfigUpdateManyAndReturnArgs} args - Arguments to update many AppConfigs.
     * @example
     * // Update many AppConfigs
     * const appConfig = await prisma.appConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppConfigs and only return the `id`
     * const appConfigWithIdOnly = await prisma.appConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, AppConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppConfig.
     * @param {AppConfigUpsertArgs} args - Arguments to update or create a AppConfig.
     * @example
     * // Update or create a AppConfig
     * const appConfig = await prisma.appConfig.upsert({
     *   create: {
     *     // ... data to create a AppConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppConfig we want to update
     *   }
     * })
     */
    upsert<T extends AppConfigUpsertArgs>(args: SelectSubset<T, AppConfigUpsertArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigCountArgs} args - Arguments to filter AppConfigs to count.
     * @example
     * // Count the number of AppConfigs
     * const count = await prisma.appConfig.count({
     *   where: {
     *     // ... the filter for the AppConfigs we want to count
     *   }
     * })
    **/
    count<T extends AppConfigCountArgs>(
      args?: Subset<T, AppConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppConfigAggregateArgs>(args: Subset<T, AppConfigAggregateArgs>): Prisma.PrismaPromise<GetAppConfigAggregateType<T>>

    /**
     * Group by AppConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppConfigGroupByArgs['orderBy'] }
        : { orderBy?: AppConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppConfig model
   */
  readonly fields: AppConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppConfig model
   */
  interface AppConfigFieldRefs {
    readonly id: FieldRef<"AppConfig", 'String'>
    readonly enableVoucherScanning: FieldRef<"AppConfig", 'Boolean'>
    readonly enableOfflineMode: FieldRef<"AppConfig", 'Boolean'>
    readonly enableMultiSession: FieldRef<"AppConfig", 'Boolean'>
    readonly baseSoldOutBonus: FieldRef<"AppConfig", 'Float'>
    readonly roomUpsellRate: FieldRef<"AppConfig", 'Float'>
    readonly voucherBonusRate: FieldRef<"AppConfig", 'Float'>
    readonly updatedAt: FieldRef<"AppConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppConfig findUnique
   */
  export type AppConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig findUniqueOrThrow
   */
  export type AppConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig findFirst
   */
  export type AppConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppConfigs.
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppConfigs.
     */
    distinct?: AppConfigScalarFieldEnum | AppConfigScalarFieldEnum[]
  }

  /**
   * AppConfig findFirstOrThrow
   */
  export type AppConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppConfigs.
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppConfigs.
     */
    distinct?: AppConfigScalarFieldEnum | AppConfigScalarFieldEnum[]
  }

  /**
   * AppConfig findMany
   */
  export type AppConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfigs to fetch.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppConfigs.
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    distinct?: AppConfigScalarFieldEnum | AppConfigScalarFieldEnum[]
  }

  /**
   * AppConfig create
   */
  export type AppConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a AppConfig.
     */
    data: XOR<AppConfigCreateInput, AppConfigUncheckedCreateInput>
  }

  /**
   * AppConfig createMany
   */
  export type AppConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppConfigs.
     */
    data: AppConfigCreateManyInput | AppConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppConfig createManyAndReturn
   */
  export type AppConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data used to create many AppConfigs.
     */
    data: AppConfigCreateManyInput | AppConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppConfig update
   */
  export type AppConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a AppConfig.
     */
    data: XOR<AppConfigUpdateInput, AppConfigUncheckedUpdateInput>
    /**
     * Choose, which AppConfig to update.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig updateMany
   */
  export type AppConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppConfigs.
     */
    data: XOR<AppConfigUpdateManyMutationInput, AppConfigUncheckedUpdateManyInput>
    /**
     * Filter which AppConfigs to update
     */
    where?: AppConfigWhereInput
    /**
     * Limit how many AppConfigs to update.
     */
    limit?: number
  }

  /**
   * AppConfig updateManyAndReturn
   */
  export type AppConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data used to update AppConfigs.
     */
    data: XOR<AppConfigUpdateManyMutationInput, AppConfigUncheckedUpdateManyInput>
    /**
     * Filter which AppConfigs to update
     */
    where?: AppConfigWhereInput
    /**
     * Limit how many AppConfigs to update.
     */
    limit?: number
  }

  /**
   * AppConfig upsert
   */
  export type AppConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the AppConfig to update in case it exists.
     */
    where: AppConfigWhereUniqueInput
    /**
     * In case the AppConfig found by the `where` argument doesn't exist, create a new AppConfig with this data.
     */
    create: XOR<AppConfigCreateInput, AppConfigUncheckedCreateInput>
    /**
     * In case the AppConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppConfigUpdateInput, AppConfigUncheckedUpdateInput>
  }

  /**
   * AppConfig delete
   */
  export type AppConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter which AppConfig to delete.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig deleteMany
   */
  export type AppConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppConfigs to delete
     */
    where?: AppConfigWhereInput
    /**
     * Limit how many AppConfigs to delete.
     */
    limit?: number
  }

  /**
   * AppConfig without action
   */
  export type AppConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    employeeId: 'employeeId',
    phone: 'phone',
    department: 'department',
    hourlyRate: 'hourlyRate',
    bankAccount: 'bankAccount',
    taxId: 'taxId',
    roles: 'roles',
    shiftPrefs: 'shiftPrefs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    permissions: 'permissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    role: 'role',
    shiftType: 'shiftType',
    clockInTime: 'clockInTime',
    clockOutTime: 'clockOutTime',
    status: 'status',
    basePayAmount: 'basePayAmount',
    tipsAmount: 'tipsAmount',
    bonusAmount: 'bonusAmount',
    dailyTotal: 'dailyTotal',
    editedBy: 'editedBy',
    editedAt: 'editedAt',
    editReason: 'editReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const TimeLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    employeeId: 'employeeId',
    sessionId: 'sessionId',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    roomBonus: 'roomBonus',
    roomValue: 'roomValue',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimeLogScalarFieldEnum = (typeof TimeLogScalarFieldEnum)[keyof typeof TimeLogScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cardNumber: 'cardNumber',
    room: 'room',
    passengerCount: 'passengerCount',
    expiryDate: 'expiryDate',
    bonusAmount: 'bonusAmount',
    status: 'status',
    declineReason: 'declineReason',
    declinedAt: 'declinedAt',
    scannedAt: 'scannedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


  export const VoucherLogScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    voucherId: 'voucherId',
    action: 'action',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type VoucherLogScalarFieldEnum = (typeof VoucherLogScalarFieldEnum)[keyof typeof VoucherLogScalarFieldEnum]


  export const PayPeriodScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    finalized: 'finalized',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayPeriodScalarFieldEnum = (typeof PayPeriodScalarFieldEnum)[keyof typeof PayPeriodScalarFieldEnum]


  export const PayEstimateScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    payPeriodId: 'payPeriodId',
    basePay: 'basePay',
    tips: 'tips',
    roomBonus: 'roomBonus',
    voucherBonus: 'voucherBonus',
    soldOutBonus: 'soldOutBonus',
    totalEstimated: 'totalEstimated',
    isFinalized: 'isFinalized',
    finalizedAt: 'finalizedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayEstimateScalarFieldEnum = (typeof PayEstimateScalarFieldEnum)[keyof typeof PayEstimateScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    userId: 'userId',
    adminId: 'adminId',
    entityType: 'entityType',
    entityId: 'entityId',
    changes: 'changes',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const AppConfigScalarFieldEnum: {
    id: 'id',
    enableVoucherScanning: 'enableVoucherScanning',
    enableOfflineMode: 'enableOfflineMode',
    enableMultiSession: 'enableMultiSession',
    baseSoldOutBonus: 'baseSoldOutBonus',
    roomUpsellRate: 'roomUpsellRate',
    voucherBonusRate: 'voucherBonusRate',
    updatedAt: 'updatedAt'
  };

  export type AppConfigScalarFieldEnum = (typeof AppConfigScalarFieldEnum)[keyof typeof AppConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ShiftRole'
   */
  export type EnumShiftRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftRole'>
    


  /**
   * Reference to a field of type 'ShiftRole[]'
   */
  export type ListEnumShiftRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftRole[]'>
    


  /**
   * Reference to a field of type 'ShiftType'
   */
  export type EnumShiftTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftType'>
    


  /**
   * Reference to a field of type 'ShiftType[]'
   */
  export type ListEnumShiftTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftType[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TimeLogStatus'
   */
  export type EnumTimeLogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeLogStatus'>
    


  /**
   * Reference to a field of type 'TimeLogStatus[]'
   */
  export type ListEnumTimeLogStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeLogStatus[]'>
    


  /**
   * Reference to a field of type 'VoucherStatus'
   */
  export type EnumVoucherStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoucherStatus'>
    


  /**
   * Reference to a field of type 'VoucherStatus[]'
   */
  export type ListEnumVoucherStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoucherStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PayPeriodStatus'
   */
  export type EnumPayPeriodStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayPeriodStatus'>
    


  /**
   * Reference to a field of type 'PayPeriodStatus[]'
   */
  export type ListEnumPayPeriodStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayPeriodStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    sessions?: SessionListRelationFilter
    timeLogs?: TimeLogListRelationFilter
    vouchers?: VoucherListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    timeLogs?: TimeLogOrderByRelationAggregateInput
    vouchers?: VoucherOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    sessions?: SessionListRelationFilter
    timeLogs?: TimeLogListRelationFilter
    vouchers?: VoucherListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    userId?: StringFilter<"Employee"> | string
    employeeId?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    hourlyRate?: FloatFilter<"Employee"> | number
    bankAccount?: StringNullableFilter<"Employee"> | string | null
    taxId?: StringNullableFilter<"Employee"> | string | null
    roles?: StringNullableListFilter<"Employee">
    shiftPrefs?: StringNullableListFilter<"Employee">
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    timeLogs?: TimeLogListRelationFilter
    voucherLogs?: VoucherLogListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    phone?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    hourlyRate?: SortOrder
    bankAccount?: SortOrderInput | SortOrder
    taxId?: SortOrderInput | SortOrder
    roles?: SortOrder
    shiftPrefs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    timeLogs?: TimeLogOrderByRelationAggregateInput
    voucherLogs?: VoucherLogOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    employeeId?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    phone?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    hourlyRate?: FloatFilter<"Employee"> | number
    bankAccount?: StringNullableFilter<"Employee"> | string | null
    taxId?: StringNullableFilter<"Employee"> | string | null
    roles?: StringNullableListFilter<"Employee">
    shiftPrefs?: StringNullableListFilter<"Employee">
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    timeLogs?: TimeLogListRelationFilter
    voucherLogs?: VoucherLogListRelationFilter
  }, "id" | "userId" | "employeeId">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    phone?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    hourlyRate?: SortOrder
    bankAccount?: SortOrderInput | SortOrder
    taxId?: SortOrderInput | SortOrder
    roles?: SortOrder
    shiftPrefs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    userId?: StringWithAggregatesFilter<"Employee"> | string
    employeeId?: StringWithAggregatesFilter<"Employee"> | string
    phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    department?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    hourlyRate?: FloatWithAggregatesFilter<"Employee"> | number
    bankAccount?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    taxId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    roles?: StringNullableListFilter<"Employee">
    shiftPrefs?: StringNullableListFilter<"Employee">
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    userId?: StringFilter<"Admin"> | string
    permissions?: StringNullableListFilter<"Admin">
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    permissions?: StringNullableListFilter<"Admin">
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    userId?: StringWithAggregatesFilter<"Admin"> | string
    permissions?: StringNullableListFilter<"Admin">
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    role?: EnumShiftRoleFilter<"Session"> | $Enums.ShiftRole
    shiftType?: EnumShiftTypeFilter<"Session"> | $Enums.ShiftType
    clockInTime?: DateTimeFilter<"Session"> | Date | string
    clockOutTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    basePayAmount?: FloatNullableFilter<"Session"> | number | null
    tipsAmount?: FloatNullableFilter<"Session"> | number | null
    bonusAmount?: FloatNullableFilter<"Session"> | number | null
    dailyTotal?: FloatNullableFilter<"Session"> | number | null
    editedBy?: StringNullableFilter<"Session"> | string | null
    editedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    editReason?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    timeLogs?: TimeLogListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    shiftType?: SortOrder
    clockInTime?: SortOrder
    clockOutTime?: SortOrderInput | SortOrder
    status?: SortOrder
    basePayAmount?: SortOrderInput | SortOrder
    tipsAmount?: SortOrderInput | SortOrder
    bonusAmount?: SortOrderInput | SortOrder
    dailyTotal?: SortOrderInput | SortOrder
    editedBy?: SortOrderInput | SortOrder
    editedAt?: SortOrderInput | SortOrder
    editReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    timeLogs?: TimeLogOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    role?: EnumShiftRoleFilter<"Session"> | $Enums.ShiftRole
    shiftType?: EnumShiftTypeFilter<"Session"> | $Enums.ShiftType
    clockInTime?: DateTimeFilter<"Session"> | Date | string
    clockOutTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    basePayAmount?: FloatNullableFilter<"Session"> | number | null
    tipsAmount?: FloatNullableFilter<"Session"> | number | null
    bonusAmount?: FloatNullableFilter<"Session"> | number | null
    dailyTotal?: FloatNullableFilter<"Session"> | number | null
    editedBy?: StringNullableFilter<"Session"> | string | null
    editedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    editReason?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    timeLogs?: TimeLogListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    shiftType?: SortOrder
    clockInTime?: SortOrder
    clockOutTime?: SortOrderInput | SortOrder
    status?: SortOrder
    basePayAmount?: SortOrderInput | SortOrder
    tipsAmount?: SortOrderInput | SortOrder
    bonusAmount?: SortOrderInput | SortOrder
    dailyTotal?: SortOrderInput | SortOrder
    editedBy?: SortOrderInput | SortOrder
    editedAt?: SortOrderInput | SortOrder
    editReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    role?: EnumShiftRoleWithAggregatesFilter<"Session"> | $Enums.ShiftRole
    shiftType?: EnumShiftTypeWithAggregatesFilter<"Session"> | $Enums.ShiftType
    clockInTime?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    clockOutTime?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    status?: EnumSessionStatusWithAggregatesFilter<"Session"> | $Enums.SessionStatus
    basePayAmount?: FloatNullableWithAggregatesFilter<"Session"> | number | null
    tipsAmount?: FloatNullableWithAggregatesFilter<"Session"> | number | null
    bonusAmount?: FloatNullableWithAggregatesFilter<"Session"> | number | null
    dailyTotal?: FloatNullableWithAggregatesFilter<"Session"> | number | null
    editedBy?: StringNullableWithAggregatesFilter<"Session"> | string | null
    editedAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    editReason?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type TimeLogWhereInput = {
    AND?: TimeLogWhereInput | TimeLogWhereInput[]
    OR?: TimeLogWhereInput[]
    NOT?: TimeLogWhereInput | TimeLogWhereInput[]
    id?: StringFilter<"TimeLog"> | string
    userId?: StringFilter<"TimeLog"> | string
    employeeId?: StringFilter<"TimeLog"> | string
    sessionId?: StringFilter<"TimeLog"> | string
    startTime?: DateTimeFilter<"TimeLog"> | Date | string
    endTime?: DateTimeNullableFilter<"TimeLog"> | Date | string | null
    duration?: IntNullableFilter<"TimeLog"> | number | null
    roomBonus?: IntNullableFilter<"TimeLog"> | number | null
    roomValue?: FloatNullableFilter<"TimeLog"> | number | null
    status?: EnumTimeLogStatusFilter<"TimeLog"> | $Enums.TimeLogStatus
    createdAt?: DateTimeFilter<"TimeLog"> | Date | string
    updatedAt?: DateTimeFilter<"TimeLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }

  export type TimeLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    sessionId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    roomBonus?: SortOrderInput | SortOrder
    roomValue?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    session?: SessionOrderByWithRelationInput
  }

  export type TimeLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeLogWhereInput | TimeLogWhereInput[]
    OR?: TimeLogWhereInput[]
    NOT?: TimeLogWhereInput | TimeLogWhereInput[]
    userId?: StringFilter<"TimeLog"> | string
    employeeId?: StringFilter<"TimeLog"> | string
    sessionId?: StringFilter<"TimeLog"> | string
    startTime?: DateTimeFilter<"TimeLog"> | Date | string
    endTime?: DateTimeNullableFilter<"TimeLog"> | Date | string | null
    duration?: IntNullableFilter<"TimeLog"> | number | null
    roomBonus?: IntNullableFilter<"TimeLog"> | number | null
    roomValue?: FloatNullableFilter<"TimeLog"> | number | null
    status?: EnumTimeLogStatusFilter<"TimeLog"> | $Enums.TimeLogStatus
    createdAt?: DateTimeFilter<"TimeLog"> | Date | string
    updatedAt?: DateTimeFilter<"TimeLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }, "id">

  export type TimeLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    sessionId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    roomBonus?: SortOrderInput | SortOrder
    roomValue?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimeLogCountOrderByAggregateInput
    _avg?: TimeLogAvgOrderByAggregateInput
    _max?: TimeLogMaxOrderByAggregateInput
    _min?: TimeLogMinOrderByAggregateInput
    _sum?: TimeLogSumOrderByAggregateInput
  }

  export type TimeLogScalarWhereWithAggregatesInput = {
    AND?: TimeLogScalarWhereWithAggregatesInput | TimeLogScalarWhereWithAggregatesInput[]
    OR?: TimeLogScalarWhereWithAggregatesInput[]
    NOT?: TimeLogScalarWhereWithAggregatesInput | TimeLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeLog"> | string
    userId?: StringWithAggregatesFilter<"TimeLog"> | string
    employeeId?: StringWithAggregatesFilter<"TimeLog"> | string
    sessionId?: StringWithAggregatesFilter<"TimeLog"> | string
    startTime?: DateTimeWithAggregatesFilter<"TimeLog"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"TimeLog"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"TimeLog"> | number | null
    roomBonus?: IntNullableWithAggregatesFilter<"TimeLog"> | number | null
    roomValue?: FloatNullableWithAggregatesFilter<"TimeLog"> | number | null
    status?: EnumTimeLogStatusWithAggregatesFilter<"TimeLog"> | $Enums.TimeLogStatus
    createdAt?: DateTimeWithAggregatesFilter<"TimeLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimeLog"> | Date | string
  }

  export type VoucherWhereInput = {
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    id?: StringFilter<"Voucher"> | string
    userId?: StringFilter<"Voucher"> | string
    cardNumber?: StringFilter<"Voucher"> | string
    room?: StringFilter<"Voucher"> | string
    passengerCount?: IntFilter<"Voucher"> | number
    expiryDate?: StringNullableFilter<"Voucher"> | string | null
    bonusAmount?: FloatFilter<"Voucher"> | number
    status?: EnumVoucherStatusFilter<"Voucher"> | $Enums.VoucherStatus
    declineReason?: StringNullableFilter<"Voucher"> | string | null
    declinedAt?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    scannedAt?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    updatedAt?: DateTimeFilter<"Voucher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VoucherOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardNumber?: SortOrder
    room?: SortOrder
    passengerCount?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    bonusAmount?: SortOrder
    status?: SortOrder
    declineReason?: SortOrderInput | SortOrder
    declinedAt?: SortOrderInput | SortOrder
    scannedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    userId?: StringFilter<"Voucher"> | string
    cardNumber?: StringFilter<"Voucher"> | string
    room?: StringFilter<"Voucher"> | string
    passengerCount?: IntFilter<"Voucher"> | number
    expiryDate?: StringNullableFilter<"Voucher"> | string | null
    bonusAmount?: FloatFilter<"Voucher"> | number
    status?: EnumVoucherStatusFilter<"Voucher"> | $Enums.VoucherStatus
    declineReason?: StringNullableFilter<"Voucher"> | string | null
    declinedAt?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    scannedAt?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    updatedAt?: DateTimeFilter<"Voucher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VoucherOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardNumber?: SortOrder
    room?: SortOrder
    passengerCount?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    bonusAmount?: SortOrder
    status?: SortOrder
    declineReason?: SortOrderInput | SortOrder
    declinedAt?: SortOrderInput | SortOrder
    scannedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    OR?: VoucherScalarWhereWithAggregatesInput[]
    NOT?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Voucher"> | string
    userId?: StringWithAggregatesFilter<"Voucher"> | string
    cardNumber?: StringWithAggregatesFilter<"Voucher"> | string
    room?: StringWithAggregatesFilter<"Voucher"> | string
    passengerCount?: IntWithAggregatesFilter<"Voucher"> | number
    expiryDate?: StringNullableWithAggregatesFilter<"Voucher"> | string | null
    bonusAmount?: FloatWithAggregatesFilter<"Voucher"> | number
    status?: EnumVoucherStatusWithAggregatesFilter<"Voucher"> | $Enums.VoucherStatus
    declineReason?: StringNullableWithAggregatesFilter<"Voucher"> | string | null
    declinedAt?: DateTimeNullableWithAggregatesFilter<"Voucher"> | Date | string | null
    scannedAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
  }

  export type VoucherLogWhereInput = {
    AND?: VoucherLogWhereInput | VoucherLogWhereInput[]
    OR?: VoucherLogWhereInput[]
    NOT?: VoucherLogWhereInput | VoucherLogWhereInput[]
    id?: StringFilter<"VoucherLog"> | string
    employeeId?: StringFilter<"VoucherLog"> | string
    voucherId?: StringFilter<"VoucherLog"> | string
    action?: StringFilter<"VoucherLog"> | string
    details?: JsonFilter<"VoucherLog">
    createdAt?: DateTimeFilter<"VoucherLog"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type VoucherLogOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    voucherId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type VoucherLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoucherLogWhereInput | VoucherLogWhereInput[]
    OR?: VoucherLogWhereInput[]
    NOT?: VoucherLogWhereInput | VoucherLogWhereInput[]
    employeeId?: StringFilter<"VoucherLog"> | string
    voucherId?: StringFilter<"VoucherLog"> | string
    action?: StringFilter<"VoucherLog"> | string
    details?: JsonFilter<"VoucherLog">
    createdAt?: DateTimeFilter<"VoucherLog"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type VoucherLogOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    voucherId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    _count?: VoucherLogCountOrderByAggregateInput
    _max?: VoucherLogMaxOrderByAggregateInput
    _min?: VoucherLogMinOrderByAggregateInput
  }

  export type VoucherLogScalarWhereWithAggregatesInput = {
    AND?: VoucherLogScalarWhereWithAggregatesInput | VoucherLogScalarWhereWithAggregatesInput[]
    OR?: VoucherLogScalarWhereWithAggregatesInput[]
    NOT?: VoucherLogScalarWhereWithAggregatesInput | VoucherLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VoucherLog"> | string
    employeeId?: StringWithAggregatesFilter<"VoucherLog"> | string
    voucherId?: StringWithAggregatesFilter<"VoucherLog"> | string
    action?: StringWithAggregatesFilter<"VoucherLog"> | string
    details?: JsonWithAggregatesFilter<"VoucherLog">
    createdAt?: DateTimeWithAggregatesFilter<"VoucherLog"> | Date | string
  }

  export type PayPeriodWhereInput = {
    AND?: PayPeriodWhereInput | PayPeriodWhereInput[]
    OR?: PayPeriodWhereInput[]
    NOT?: PayPeriodWhereInput | PayPeriodWhereInput[]
    id?: StringFilter<"PayPeriod"> | string
    startDate?: DateTimeFilter<"PayPeriod"> | Date | string
    endDate?: DateTimeFilter<"PayPeriod"> | Date | string
    status?: EnumPayPeriodStatusFilter<"PayPeriod"> | $Enums.PayPeriodStatus
    finalized?: DateTimeNullableFilter<"PayPeriod"> | Date | string | null
    createdAt?: DateTimeFilter<"PayPeriod"> | Date | string
    updatedAt?: DateTimeFilter<"PayPeriod"> | Date | string
  }

  export type PayPeriodOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    finalized?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayPeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayPeriodWhereInput | PayPeriodWhereInput[]
    OR?: PayPeriodWhereInput[]
    NOT?: PayPeriodWhereInput | PayPeriodWhereInput[]
    startDate?: DateTimeFilter<"PayPeriod"> | Date | string
    endDate?: DateTimeFilter<"PayPeriod"> | Date | string
    status?: EnumPayPeriodStatusFilter<"PayPeriod"> | $Enums.PayPeriodStatus
    finalized?: DateTimeNullableFilter<"PayPeriod"> | Date | string | null
    createdAt?: DateTimeFilter<"PayPeriod"> | Date | string
    updatedAt?: DateTimeFilter<"PayPeriod"> | Date | string
  }, "id">

  export type PayPeriodOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    finalized?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayPeriodCountOrderByAggregateInput
    _max?: PayPeriodMaxOrderByAggregateInput
    _min?: PayPeriodMinOrderByAggregateInput
  }

  export type PayPeriodScalarWhereWithAggregatesInput = {
    AND?: PayPeriodScalarWhereWithAggregatesInput | PayPeriodScalarWhereWithAggregatesInput[]
    OR?: PayPeriodScalarWhereWithAggregatesInput[]
    NOT?: PayPeriodScalarWhereWithAggregatesInput | PayPeriodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayPeriod"> | string
    startDate?: DateTimeWithAggregatesFilter<"PayPeriod"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"PayPeriod"> | Date | string
    status?: EnumPayPeriodStatusWithAggregatesFilter<"PayPeriod"> | $Enums.PayPeriodStatus
    finalized?: DateTimeNullableWithAggregatesFilter<"PayPeriod"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PayPeriod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayPeriod"> | Date | string
  }

  export type PayEstimateWhereInput = {
    AND?: PayEstimateWhereInput | PayEstimateWhereInput[]
    OR?: PayEstimateWhereInput[]
    NOT?: PayEstimateWhereInput | PayEstimateWhereInput[]
    id?: StringFilter<"PayEstimate"> | string
    employeeId?: StringFilter<"PayEstimate"> | string
    payPeriodId?: StringFilter<"PayEstimate"> | string
    basePay?: FloatFilter<"PayEstimate"> | number
    tips?: FloatFilter<"PayEstimate"> | number
    roomBonus?: FloatFilter<"PayEstimate"> | number
    voucherBonus?: FloatFilter<"PayEstimate"> | number
    soldOutBonus?: FloatFilter<"PayEstimate"> | number
    totalEstimated?: FloatFilter<"PayEstimate"> | number
    isFinalized?: BoolFilter<"PayEstimate"> | boolean
    finalizedAt?: DateTimeNullableFilter<"PayEstimate"> | Date | string | null
    createdAt?: DateTimeFilter<"PayEstimate"> | Date | string
    updatedAt?: DateTimeFilter<"PayEstimate"> | Date | string
  }

  export type PayEstimateOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payPeriodId?: SortOrder
    basePay?: SortOrder
    tips?: SortOrder
    roomBonus?: SortOrder
    voucherBonus?: SortOrder
    soldOutBonus?: SortOrder
    totalEstimated?: SortOrder
    isFinalized?: SortOrder
    finalizedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayEstimateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_payPeriodId?: PayEstimateEmployeeIdPayPeriodIdCompoundUniqueInput
    AND?: PayEstimateWhereInput | PayEstimateWhereInput[]
    OR?: PayEstimateWhereInput[]
    NOT?: PayEstimateWhereInput | PayEstimateWhereInput[]
    employeeId?: StringFilter<"PayEstimate"> | string
    payPeriodId?: StringFilter<"PayEstimate"> | string
    basePay?: FloatFilter<"PayEstimate"> | number
    tips?: FloatFilter<"PayEstimate"> | number
    roomBonus?: FloatFilter<"PayEstimate"> | number
    voucherBonus?: FloatFilter<"PayEstimate"> | number
    soldOutBonus?: FloatFilter<"PayEstimate"> | number
    totalEstimated?: FloatFilter<"PayEstimate"> | number
    isFinalized?: BoolFilter<"PayEstimate"> | boolean
    finalizedAt?: DateTimeNullableFilter<"PayEstimate"> | Date | string | null
    createdAt?: DateTimeFilter<"PayEstimate"> | Date | string
    updatedAt?: DateTimeFilter<"PayEstimate"> | Date | string
  }, "id" | "employeeId_payPeriodId">

  export type PayEstimateOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payPeriodId?: SortOrder
    basePay?: SortOrder
    tips?: SortOrder
    roomBonus?: SortOrder
    voucherBonus?: SortOrder
    soldOutBonus?: SortOrder
    totalEstimated?: SortOrder
    isFinalized?: SortOrder
    finalizedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayEstimateCountOrderByAggregateInput
    _avg?: PayEstimateAvgOrderByAggregateInput
    _max?: PayEstimateMaxOrderByAggregateInput
    _min?: PayEstimateMinOrderByAggregateInput
    _sum?: PayEstimateSumOrderByAggregateInput
  }

  export type PayEstimateScalarWhereWithAggregatesInput = {
    AND?: PayEstimateScalarWhereWithAggregatesInput | PayEstimateScalarWhereWithAggregatesInput[]
    OR?: PayEstimateScalarWhereWithAggregatesInput[]
    NOT?: PayEstimateScalarWhereWithAggregatesInput | PayEstimateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayEstimate"> | string
    employeeId?: StringWithAggregatesFilter<"PayEstimate"> | string
    payPeriodId?: StringWithAggregatesFilter<"PayEstimate"> | string
    basePay?: FloatWithAggregatesFilter<"PayEstimate"> | number
    tips?: FloatWithAggregatesFilter<"PayEstimate"> | number
    roomBonus?: FloatWithAggregatesFilter<"PayEstimate"> | number
    voucherBonus?: FloatWithAggregatesFilter<"PayEstimate"> | number
    soldOutBonus?: FloatWithAggregatesFilter<"PayEstimate"> | number
    totalEstimated?: FloatWithAggregatesFilter<"PayEstimate"> | number
    isFinalized?: BoolWithAggregatesFilter<"PayEstimate"> | boolean
    finalizedAt?: DateTimeNullableWithAggregatesFilter<"PayEstimate"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PayEstimate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayEstimate"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    adminId?: StringNullableFilter<"AuditLog"> | string | null
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    changes?: JsonFilter<"AuditLog">
    reason?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    adminId?: SortOrderInput | SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    changes?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    adminId?: StringNullableFilter<"AuditLog"> | string | null
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    changes?: JsonFilter<"AuditLog">
    reason?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    adminId?: SortOrderInput | SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    changes?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    adminId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    changes?: JsonWithAggregatesFilter<"AuditLog">
    reason?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type AppConfigWhereInput = {
    AND?: AppConfigWhereInput | AppConfigWhereInput[]
    OR?: AppConfigWhereInput[]
    NOT?: AppConfigWhereInput | AppConfigWhereInput[]
    id?: StringFilter<"AppConfig"> | string
    enableVoucherScanning?: BoolFilter<"AppConfig"> | boolean
    enableOfflineMode?: BoolFilter<"AppConfig"> | boolean
    enableMultiSession?: BoolFilter<"AppConfig"> | boolean
    baseSoldOutBonus?: FloatFilter<"AppConfig"> | number
    roomUpsellRate?: FloatFilter<"AppConfig"> | number
    voucherBonusRate?: FloatFilter<"AppConfig"> | number
    updatedAt?: DateTimeFilter<"AppConfig"> | Date | string
  }

  export type AppConfigOrderByWithRelationInput = {
    id?: SortOrder
    enableVoucherScanning?: SortOrder
    enableOfflineMode?: SortOrder
    enableMultiSession?: SortOrder
    baseSoldOutBonus?: SortOrder
    roomUpsellRate?: SortOrder
    voucherBonusRate?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppConfigWhereInput | AppConfigWhereInput[]
    OR?: AppConfigWhereInput[]
    NOT?: AppConfigWhereInput | AppConfigWhereInput[]
    enableVoucherScanning?: BoolFilter<"AppConfig"> | boolean
    enableOfflineMode?: BoolFilter<"AppConfig"> | boolean
    enableMultiSession?: BoolFilter<"AppConfig"> | boolean
    baseSoldOutBonus?: FloatFilter<"AppConfig"> | number
    roomUpsellRate?: FloatFilter<"AppConfig"> | number
    voucherBonusRate?: FloatFilter<"AppConfig"> | number
    updatedAt?: DateTimeFilter<"AppConfig"> | Date | string
  }, "id">

  export type AppConfigOrderByWithAggregationInput = {
    id?: SortOrder
    enableVoucherScanning?: SortOrder
    enableOfflineMode?: SortOrder
    enableMultiSession?: SortOrder
    baseSoldOutBonus?: SortOrder
    roomUpsellRate?: SortOrder
    voucherBonusRate?: SortOrder
    updatedAt?: SortOrder
    _count?: AppConfigCountOrderByAggregateInput
    _avg?: AppConfigAvgOrderByAggregateInput
    _max?: AppConfigMaxOrderByAggregateInput
    _min?: AppConfigMinOrderByAggregateInput
    _sum?: AppConfigSumOrderByAggregateInput
  }

  export type AppConfigScalarWhereWithAggregatesInput = {
    AND?: AppConfigScalarWhereWithAggregatesInput | AppConfigScalarWhereWithAggregatesInput[]
    OR?: AppConfigScalarWhereWithAggregatesInput[]
    NOT?: AppConfigScalarWhereWithAggregatesInput | AppConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppConfig"> | string
    enableVoucherScanning?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    enableOfflineMode?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    enableMultiSession?: BoolWithAggregatesFilter<"AppConfig"> | boolean
    baseSoldOutBonus?: FloatWithAggregatesFilter<"AppConfig"> | number
    roomUpsellRate?: FloatWithAggregatesFilter<"AppConfig"> | number
    voucherBonusRate?: FloatWithAggregatesFilter<"AppConfig"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"AppConfig"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    timeLogs?: TimeLogCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    timeLogs?: TimeLogUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    timeLogs?: TimeLogUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    timeLogs?: TimeLogUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    employeeId: string
    phone?: string | null
    department?: string | null
    hourlyRate: number
    bankAccount?: string | null
    taxId?: string | null
    roles?: EmployeeCreaterolesInput | string[]
    shiftPrefs?: EmployeeCreateshiftPrefsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    timeLogs?: TimeLogCreateNestedManyWithoutEmployeeInput
    voucherLogs?: VoucherLogCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    userId: string
    employeeId: string
    phone?: string | null
    department?: string | null
    hourlyRate: number
    bankAccount?: string | null
    taxId?: string | null
    roles?: EmployeeCreaterolesInput | string[]
    shiftPrefs?: EmployeeCreateshiftPrefsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    timeLogs?: TimeLogUncheckedCreateNestedManyWithoutEmployeeInput
    voucherLogs?: VoucherLogUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EmployeeUpdaterolesInput | string[]
    shiftPrefs?: EmployeeUpdateshiftPrefsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    timeLogs?: TimeLogUpdateManyWithoutEmployeeNestedInput
    voucherLogs?: VoucherLogUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EmployeeUpdaterolesInput | string[]
    shiftPrefs?: EmployeeUpdateshiftPrefsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLogs?: TimeLogUncheckedUpdateManyWithoutEmployeeNestedInput
    voucherLogs?: VoucherLogUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    userId: string
    employeeId: string
    phone?: string | null
    department?: string | null
    hourlyRate: number
    bankAccount?: string | null
    taxId?: string | null
    roles?: EmployeeCreaterolesInput | string[]
    shiftPrefs?: EmployeeCreateshiftPrefsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EmployeeUpdaterolesInput | string[]
    shiftPrefs?: EmployeeUpdateshiftPrefsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EmployeeUpdaterolesInput | string[]
    shiftPrefs?: EmployeeUpdateshiftPrefsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    permissions?: AdminCreatepermissionsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    userId: string
    permissions?: AdminCreatepermissionsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: AdminUpdatepermissionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    permissions?: AdminUpdatepermissionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    userId: string
    permissions?: AdminCreatepermissionsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: AdminUpdatepermissionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    permissions?: AdminUpdatepermissionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    role: $Enums.ShiftRole
    shiftType: $Enums.ShiftType
    clockInTime: Date | string
    clockOutTime?: Date | string | null
    status?: $Enums.SessionStatus
    basePayAmount?: number | null
    tipsAmount?: number | null
    bonusAmount?: number | null
    dailyTotal?: number | null
    editedBy?: string | null
    editedAt?: Date | string | null
    editReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    timeLogs?: TimeLogCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    role: $Enums.ShiftRole
    shiftType: $Enums.ShiftType
    clockInTime: Date | string
    clockOutTime?: Date | string | null
    status?: $Enums.SessionStatus
    basePayAmount?: number | null
    tipsAmount?: number | null
    bonusAmount?: number | null
    dailyTotal?: number | null
    editedBy?: string | null
    editedAt?: Date | string | null
    editReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeLogs?: TimeLogUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShiftRoleFieldUpdateOperationsInput | $Enums.ShiftRole
    shiftType?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    clockInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    basePayAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tipsAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    bonusAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    dailyTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    timeLogs?: TimeLogUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumShiftRoleFieldUpdateOperationsInput | $Enums.ShiftRole
    shiftType?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    clockInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    basePayAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tipsAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    bonusAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    dailyTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLogs?: TimeLogUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    role: $Enums.ShiftRole
    shiftType: $Enums.ShiftType
    clockInTime: Date | string
    clockOutTime?: Date | string | null
    status?: $Enums.SessionStatus
    basePayAmount?: number | null
    tipsAmount?: number | null
    bonusAmount?: number | null
    dailyTotal?: number | null
    editedBy?: string | null
    editedAt?: Date | string | null
    editReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShiftRoleFieldUpdateOperationsInput | $Enums.ShiftRole
    shiftType?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    clockInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    basePayAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tipsAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    bonusAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    dailyTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumShiftRoleFieldUpdateOperationsInput | $Enums.ShiftRole
    shiftType?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    clockInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    basePayAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tipsAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    bonusAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    dailyTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeLogCreateInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    roomBonus?: number | null
    roomValue?: number | null
    status?: $Enums.TimeLogStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimeLogsInput
    employee: EmployeeCreateNestedOneWithoutTimeLogsInput
    session: SessionCreateNestedOneWithoutTimeLogsInput
  }

  export type TimeLogUncheckedCreateInput = {
    id?: string
    userId: string
    employeeId: string
    sessionId: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    roomBonus?: number | null
    roomValue?: number | null
    status?: $Enums.TimeLogStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeLogsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutTimeLogsNestedInput
    session?: SessionUpdateOneRequiredWithoutTimeLogsNestedInput
  }

  export type TimeLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeLogCreateManyInput = {
    id?: string
    userId: string
    employeeId: string
    sessionId: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    roomBonus?: number | null
    roomValue?: number | null
    status?: $Enums.TimeLogStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherCreateInput = {
    id?: string
    cardNumber: string
    room: string
    passengerCount: number
    expiryDate?: string | null
    bonusAmount: number
    status?: $Enums.VoucherStatus
    declineReason?: string | null
    declinedAt?: Date | string | null
    scannedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVouchersInput
  }

  export type VoucherUncheckedCreateInput = {
    id?: string
    userId: string
    cardNumber: string
    room: string
    passengerCount: number
    expiryDate?: string | null
    bonusAmount: number
    status?: $Enums.VoucherStatus
    declineReason?: string | null
    declinedAt?: Date | string | null
    scannedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoucherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    bonusAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVouchersNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    bonusAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherCreateManyInput = {
    id?: string
    userId: string
    cardNumber: string
    room: string
    passengerCount: number
    expiryDate?: string | null
    bonusAmount: number
    status?: $Enums.VoucherStatus
    declineReason?: string | null
    declinedAt?: Date | string | null
    scannedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoucherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    bonusAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    bonusAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherLogCreateInput = {
    id?: string
    voucherId: string
    action: string
    details: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutVoucherLogsInput
  }

  export type VoucherLogUncheckedCreateInput = {
    id?: string
    employeeId: string
    voucherId: string
    action: string
    details: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type VoucherLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutVoucherLogsNestedInput
  }

  export type VoucherLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherLogCreateManyInput = {
    id?: string
    employeeId: string
    voucherId: string
    action: string
    details: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type VoucherLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayPeriodCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.PayPeriodStatus
    finalized?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayPeriodUncheckedCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.PayPeriodStatus
    finalized?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayPeriodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPayPeriodStatusFieldUpdateOperationsInput | $Enums.PayPeriodStatus
    finalized?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayPeriodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPayPeriodStatusFieldUpdateOperationsInput | $Enums.PayPeriodStatus
    finalized?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayPeriodCreateManyInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.PayPeriodStatus
    finalized?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayPeriodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPayPeriodStatusFieldUpdateOperationsInput | $Enums.PayPeriodStatus
    finalized?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayPeriodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPayPeriodStatusFieldUpdateOperationsInput | $Enums.PayPeriodStatus
    finalized?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayEstimateCreateInput = {
    id?: string
    employeeId: string
    payPeriodId: string
    basePay: number
    tips: number
    roomBonus: number
    voucherBonus: number
    soldOutBonus: number
    totalEstimated: number
    isFinalized?: boolean
    finalizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayEstimateUncheckedCreateInput = {
    id?: string
    employeeId: string
    payPeriodId: string
    basePay: number
    tips: number
    roomBonus: number
    voucherBonus: number
    soldOutBonus: number
    totalEstimated: number
    isFinalized?: boolean
    finalizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayEstimateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    payPeriodId?: StringFieldUpdateOperationsInput | string
    basePay?: FloatFieldUpdateOperationsInput | number
    tips?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    voucherBonus?: FloatFieldUpdateOperationsInput | number
    soldOutBonus?: FloatFieldUpdateOperationsInput | number
    totalEstimated?: FloatFieldUpdateOperationsInput | number
    isFinalized?: BoolFieldUpdateOperationsInput | boolean
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayEstimateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    payPeriodId?: StringFieldUpdateOperationsInput | string
    basePay?: FloatFieldUpdateOperationsInput | number
    tips?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    voucherBonus?: FloatFieldUpdateOperationsInput | number
    soldOutBonus?: FloatFieldUpdateOperationsInput | number
    totalEstimated?: FloatFieldUpdateOperationsInput | number
    isFinalized?: BoolFieldUpdateOperationsInput | boolean
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayEstimateCreateManyInput = {
    id?: string
    employeeId: string
    payPeriodId: string
    basePay: number
    tips: number
    roomBonus: number
    voucherBonus: number
    soldOutBonus: number
    totalEstimated: number
    isFinalized?: boolean
    finalizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayEstimateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    payPeriodId?: StringFieldUpdateOperationsInput | string
    basePay?: FloatFieldUpdateOperationsInput | number
    tips?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    voucherBonus?: FloatFieldUpdateOperationsInput | number
    soldOutBonus?: FloatFieldUpdateOperationsInput | number
    totalEstimated?: FloatFieldUpdateOperationsInput | number
    isFinalized?: BoolFieldUpdateOperationsInput | boolean
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayEstimateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    payPeriodId?: StringFieldUpdateOperationsInput | string
    basePay?: FloatFieldUpdateOperationsInput | number
    tips?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    voucherBonus?: FloatFieldUpdateOperationsInput | number
    soldOutBonus?: FloatFieldUpdateOperationsInput | number
    totalEstimated?: FloatFieldUpdateOperationsInput | number
    isFinalized?: BoolFieldUpdateOperationsInput | boolean
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    userId: string
    adminId?: string | null
    entityType: string
    entityId: string
    changes: JsonNullValueInput | InputJsonValue
    reason?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    userId: string
    adminId?: string | null
    entityType: string
    entityId: string
    changes: JsonNullValueInput | InputJsonValue
    reason?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    changes?: JsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    changes?: JsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    userId: string
    adminId?: string | null
    entityType: string
    entityId: string
    changes: JsonNullValueInput | InputJsonValue
    reason?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    changes?: JsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    changes?: JsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppConfigCreateInput = {
    id?: string
    enableVoucherScanning?: boolean
    enableOfflineMode?: boolean
    enableMultiSession?: boolean
    baseSoldOutBonus?: number
    roomUpsellRate?: number
    voucherBonusRate?: number
    updatedAt?: Date | string
  }

  export type AppConfigUncheckedCreateInput = {
    id?: string
    enableVoucherScanning?: boolean
    enableOfflineMode?: boolean
    enableMultiSession?: boolean
    baseSoldOutBonus?: number
    roomUpsellRate?: number
    voucherBonusRate?: number
    updatedAt?: Date | string
  }

  export type AppConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enableVoucherScanning?: BoolFieldUpdateOperationsInput | boolean
    enableOfflineMode?: BoolFieldUpdateOperationsInput | boolean
    enableMultiSession?: BoolFieldUpdateOperationsInput | boolean
    baseSoldOutBonus?: FloatFieldUpdateOperationsInput | number
    roomUpsellRate?: FloatFieldUpdateOperationsInput | number
    voucherBonusRate?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enableVoucherScanning?: BoolFieldUpdateOperationsInput | boolean
    enableOfflineMode?: BoolFieldUpdateOperationsInput | boolean
    enableMultiSession?: BoolFieldUpdateOperationsInput | boolean
    baseSoldOutBonus?: FloatFieldUpdateOperationsInput | number
    roomUpsellRate?: FloatFieldUpdateOperationsInput | number
    voucherBonusRate?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppConfigCreateManyInput = {
    id?: string
    enableVoucherScanning?: boolean
    enableOfflineMode?: boolean
    enableMultiSession?: boolean
    baseSoldOutBonus?: number
    roomUpsellRate?: number
    voucherBonusRate?: number
    updatedAt?: Date | string
  }

  export type AppConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enableVoucherScanning?: BoolFieldUpdateOperationsInput | boolean
    enableOfflineMode?: BoolFieldUpdateOperationsInput | boolean
    enableMultiSession?: BoolFieldUpdateOperationsInput | boolean
    baseSoldOutBonus?: FloatFieldUpdateOperationsInput | number
    roomUpsellRate?: FloatFieldUpdateOperationsInput | number
    voucherBonusRate?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    enableVoucherScanning?: BoolFieldUpdateOperationsInput | boolean
    enableOfflineMode?: BoolFieldUpdateOperationsInput | boolean
    enableMultiSession?: BoolFieldUpdateOperationsInput | boolean
    baseSoldOutBonus?: FloatFieldUpdateOperationsInput | number
    roomUpsellRate?: FloatFieldUpdateOperationsInput | number
    voucherBonusRate?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type TimeLogListRelationFilter = {
    every?: TimeLogWhereInput
    some?: TimeLogWhereInput
    none?: TimeLogWhereInput
  }

  export type VoucherListRelationFilter = {
    every?: VoucherWhereInput
    some?: VoucherWhereInput
    none?: VoucherWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VoucherLogListRelationFilter = {
    every?: VoucherLogWhereInput
    some?: VoucherLogWhereInput
    none?: VoucherLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VoucherLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    hourlyRate?: SortOrder
    bankAccount?: SortOrder
    taxId?: SortOrder
    roles?: SortOrder
    shiftPrefs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    hourlyRate?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    hourlyRate?: SortOrder
    bankAccount?: SortOrder
    taxId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    hourlyRate?: SortOrder
    bankAccount?: SortOrder
    taxId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    hourlyRate?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumShiftRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftRole | EnumShiftRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftRole[] | ListEnumShiftRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftRole[] | ListEnumShiftRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftRoleFilter<$PrismaModel> | $Enums.ShiftRole
  }

  export type EnumShiftTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftType | EnumShiftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftTypeFilter<$PrismaModel> | $Enums.ShiftType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    shiftType?: SortOrder
    clockInTime?: SortOrder
    clockOutTime?: SortOrder
    status?: SortOrder
    basePayAmount?: SortOrder
    tipsAmount?: SortOrder
    bonusAmount?: SortOrder
    dailyTotal?: SortOrder
    editedBy?: SortOrder
    editedAt?: SortOrder
    editReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    basePayAmount?: SortOrder
    tipsAmount?: SortOrder
    bonusAmount?: SortOrder
    dailyTotal?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    shiftType?: SortOrder
    clockInTime?: SortOrder
    clockOutTime?: SortOrder
    status?: SortOrder
    basePayAmount?: SortOrder
    tipsAmount?: SortOrder
    bonusAmount?: SortOrder
    dailyTotal?: SortOrder
    editedBy?: SortOrder
    editedAt?: SortOrder
    editReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    shiftType?: SortOrder
    clockInTime?: SortOrder
    clockOutTime?: SortOrder
    status?: SortOrder
    basePayAmount?: SortOrder
    tipsAmount?: SortOrder
    bonusAmount?: SortOrder
    dailyTotal?: SortOrder
    editedBy?: SortOrder
    editedAt?: SortOrder
    editReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    basePayAmount?: SortOrder
    tipsAmount?: SortOrder
    bonusAmount?: SortOrder
    dailyTotal?: SortOrder
  }

  export type EnumShiftRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftRole | EnumShiftRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftRole[] | ListEnumShiftRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftRole[] | ListEnumShiftRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftRoleWithAggregatesFilter<$PrismaModel> | $Enums.ShiftRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftRoleFilter<$PrismaModel>
    _max?: NestedEnumShiftRoleFilter<$PrismaModel>
  }

  export type EnumShiftTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftType | EnumShiftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShiftType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftTypeFilter<$PrismaModel>
    _max?: NestedEnumShiftTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumTimeLogStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeLogStatus | EnumTimeLogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TimeLogStatus[] | ListEnumTimeLogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeLogStatus[] | ListEnumTimeLogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeLogStatusFilter<$PrismaModel> | $Enums.TimeLogStatus
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type TimeLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    sessionId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    roomBonus?: SortOrder
    roomValue?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeLogAvgOrderByAggregateInput = {
    duration?: SortOrder
    roomBonus?: SortOrder
    roomValue?: SortOrder
  }

  export type TimeLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    sessionId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    roomBonus?: SortOrder
    roomValue?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    sessionId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    roomBonus?: SortOrder
    roomValue?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeLogSumOrderByAggregateInput = {
    duration?: SortOrder
    roomBonus?: SortOrder
    roomValue?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumTimeLogStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeLogStatus | EnumTimeLogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TimeLogStatus[] | ListEnumTimeLogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeLogStatus[] | ListEnumTimeLogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeLogStatusWithAggregatesFilter<$PrismaModel> | $Enums.TimeLogStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeLogStatusFilter<$PrismaModel>
    _max?: NestedEnumTimeLogStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumVoucherStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VoucherStatus | EnumVoucherStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVoucherStatusFilter<$PrismaModel> | $Enums.VoucherStatus
  }

  export type VoucherCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardNumber?: SortOrder
    room?: SortOrder
    passengerCount?: SortOrder
    expiryDate?: SortOrder
    bonusAmount?: SortOrder
    status?: SortOrder
    declineReason?: SortOrder
    declinedAt?: SortOrder
    scannedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    passengerCount?: SortOrder
    bonusAmount?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardNumber?: SortOrder
    room?: SortOrder
    passengerCount?: SortOrder
    expiryDate?: SortOrder
    bonusAmount?: SortOrder
    status?: SortOrder
    declineReason?: SortOrder
    declinedAt?: SortOrder
    scannedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardNumber?: SortOrder
    room?: SortOrder
    passengerCount?: SortOrder
    expiryDate?: SortOrder
    bonusAmount?: SortOrder
    status?: SortOrder
    declineReason?: SortOrder
    declinedAt?: SortOrder
    scannedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    passengerCount?: SortOrder
    bonusAmount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumVoucherStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoucherStatus | EnumVoucherStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVoucherStatusWithAggregatesFilter<$PrismaModel> | $Enums.VoucherStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoucherStatusFilter<$PrismaModel>
    _max?: NestedEnumVoucherStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VoucherLogCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    voucherId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type VoucherLogMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    voucherId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type VoucherLogMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    voucherId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumPayPeriodStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayPeriodStatus | EnumPayPeriodStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayPeriodStatus[] | ListEnumPayPeriodStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayPeriodStatus[] | ListEnumPayPeriodStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayPeriodStatusFilter<$PrismaModel> | $Enums.PayPeriodStatus
  }

  export type PayPeriodCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    finalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayPeriodMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    finalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayPeriodMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    finalized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPayPeriodStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayPeriodStatus | EnumPayPeriodStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayPeriodStatus[] | ListEnumPayPeriodStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayPeriodStatus[] | ListEnumPayPeriodStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayPeriodStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayPeriodStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayPeriodStatusFilter<$PrismaModel>
    _max?: NestedEnumPayPeriodStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PayEstimateEmployeeIdPayPeriodIdCompoundUniqueInput = {
    employeeId: string
    payPeriodId: string
  }

  export type PayEstimateCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payPeriodId?: SortOrder
    basePay?: SortOrder
    tips?: SortOrder
    roomBonus?: SortOrder
    voucherBonus?: SortOrder
    soldOutBonus?: SortOrder
    totalEstimated?: SortOrder
    isFinalized?: SortOrder
    finalizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayEstimateAvgOrderByAggregateInput = {
    basePay?: SortOrder
    tips?: SortOrder
    roomBonus?: SortOrder
    voucherBonus?: SortOrder
    soldOutBonus?: SortOrder
    totalEstimated?: SortOrder
  }

  export type PayEstimateMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payPeriodId?: SortOrder
    basePay?: SortOrder
    tips?: SortOrder
    roomBonus?: SortOrder
    voucherBonus?: SortOrder
    soldOutBonus?: SortOrder
    totalEstimated?: SortOrder
    isFinalized?: SortOrder
    finalizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayEstimateMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payPeriodId?: SortOrder
    basePay?: SortOrder
    tips?: SortOrder
    roomBonus?: SortOrder
    voucherBonus?: SortOrder
    soldOutBonus?: SortOrder
    totalEstimated?: SortOrder
    isFinalized?: SortOrder
    finalizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayEstimateSumOrderByAggregateInput = {
    basePay?: SortOrder
    tips?: SortOrder
    roomBonus?: SortOrder
    voucherBonus?: SortOrder
    soldOutBonus?: SortOrder
    totalEstimated?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    changes?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type AppConfigCountOrderByAggregateInput = {
    id?: SortOrder
    enableVoucherScanning?: SortOrder
    enableOfflineMode?: SortOrder
    enableMultiSession?: SortOrder
    baseSoldOutBonus?: SortOrder
    roomUpsellRate?: SortOrder
    voucherBonusRate?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppConfigAvgOrderByAggregateInput = {
    baseSoldOutBonus?: SortOrder
    roomUpsellRate?: SortOrder
    voucherBonusRate?: SortOrder
  }

  export type AppConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    enableVoucherScanning?: SortOrder
    enableOfflineMode?: SortOrder
    enableMultiSession?: SortOrder
    baseSoldOutBonus?: SortOrder
    roomUpsellRate?: SortOrder
    voucherBonusRate?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppConfigMinOrderByAggregateInput = {
    id?: SortOrder
    enableVoucherScanning?: SortOrder
    enableOfflineMode?: SortOrder
    enableMultiSession?: SortOrder
    baseSoldOutBonus?: SortOrder
    roomUpsellRate?: SortOrder
    voucherBonusRate?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppConfigSumOrderByAggregateInput = {
    baseSoldOutBonus?: SortOrder
    roomUpsellRate?: SortOrder
    voucherBonusRate?: SortOrder
  }

  export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TimeLogCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeLogCreateWithoutUserInput, TimeLogUncheckedCreateWithoutUserInput> | TimeLogCreateWithoutUserInput[] | TimeLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeLogCreateOrConnectWithoutUserInput | TimeLogCreateOrConnectWithoutUserInput[]
    createMany?: TimeLogCreateManyUserInputEnvelope
    connect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
  }

  export type VoucherCreateNestedManyWithoutUserInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TimeLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeLogCreateWithoutUserInput, TimeLogUncheckedCreateWithoutUserInput> | TimeLogCreateWithoutUserInput[] | TimeLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeLogCreateOrConnectWithoutUserInput | TimeLogCreateOrConnectWithoutUserInput[]
    createMany?: TimeLogCreateManyUserInputEnvelope
    connect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
  }

  export type VoucherUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmployeeUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TimeLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeLogCreateWithoutUserInput, TimeLogUncheckedCreateWithoutUserInput> | TimeLogCreateWithoutUserInput[] | TimeLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeLogCreateOrConnectWithoutUserInput | TimeLogCreateOrConnectWithoutUserInput[]
    upsert?: TimeLogUpsertWithWhereUniqueWithoutUserInput | TimeLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeLogCreateManyUserInputEnvelope
    set?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    disconnect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    delete?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    connect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    update?: TimeLogUpdateWithWhereUniqueWithoutUserInput | TimeLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeLogUpdateManyWithWhereWithoutUserInput | TimeLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeLogScalarWhereInput | TimeLogScalarWhereInput[]
  }

  export type VoucherUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutUserInput | VoucherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutUserInput | VoucherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutUserInput | VoucherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TimeLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeLogCreateWithoutUserInput, TimeLogUncheckedCreateWithoutUserInput> | TimeLogCreateWithoutUserInput[] | TimeLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeLogCreateOrConnectWithoutUserInput | TimeLogCreateOrConnectWithoutUserInput[]
    upsert?: TimeLogUpsertWithWhereUniqueWithoutUserInput | TimeLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeLogCreateManyUserInputEnvelope
    set?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    disconnect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    delete?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    connect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    update?: TimeLogUpdateWithWhereUniqueWithoutUserInput | TimeLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeLogUpdateManyWithWhereWithoutUserInput | TimeLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeLogScalarWhereInput | TimeLogScalarWhereInput[]
  }

  export type VoucherUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutUserInput | VoucherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutUserInput | VoucherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutUserInput | VoucherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type EmployeeCreaterolesInput = {
    set: string[]
  }

  export type EmployeeCreateshiftPrefsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type TimeLogCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<TimeLogCreateWithoutEmployeeInput, TimeLogUncheckedCreateWithoutEmployeeInput> | TimeLogCreateWithoutEmployeeInput[] | TimeLogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TimeLogCreateOrConnectWithoutEmployeeInput | TimeLogCreateOrConnectWithoutEmployeeInput[]
    createMany?: TimeLogCreateManyEmployeeInputEnvelope
    connect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
  }

  export type VoucherLogCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<VoucherLogCreateWithoutEmployeeInput, VoucherLogUncheckedCreateWithoutEmployeeInput> | VoucherLogCreateWithoutEmployeeInput[] | VoucherLogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: VoucherLogCreateOrConnectWithoutEmployeeInput | VoucherLogCreateOrConnectWithoutEmployeeInput[]
    createMany?: VoucherLogCreateManyEmployeeInputEnvelope
    connect?: VoucherLogWhereUniqueInput | VoucherLogWhereUniqueInput[]
  }

  export type TimeLogUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<TimeLogCreateWithoutEmployeeInput, TimeLogUncheckedCreateWithoutEmployeeInput> | TimeLogCreateWithoutEmployeeInput[] | TimeLogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TimeLogCreateOrConnectWithoutEmployeeInput | TimeLogCreateOrConnectWithoutEmployeeInput[]
    createMany?: TimeLogCreateManyEmployeeInputEnvelope
    connect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
  }

  export type VoucherLogUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<VoucherLogCreateWithoutEmployeeInput, VoucherLogUncheckedCreateWithoutEmployeeInput> | VoucherLogCreateWithoutEmployeeInput[] | VoucherLogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: VoucherLogCreateOrConnectWithoutEmployeeInput | VoucherLogCreateOrConnectWithoutEmployeeInput[]
    createMany?: VoucherLogCreateManyEmployeeInputEnvelope
    connect?: VoucherLogWhereUniqueInput | VoucherLogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUpdaterolesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmployeeUpdateshiftPrefsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type TimeLogUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<TimeLogCreateWithoutEmployeeInput, TimeLogUncheckedCreateWithoutEmployeeInput> | TimeLogCreateWithoutEmployeeInput[] | TimeLogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TimeLogCreateOrConnectWithoutEmployeeInput | TimeLogCreateOrConnectWithoutEmployeeInput[]
    upsert?: TimeLogUpsertWithWhereUniqueWithoutEmployeeInput | TimeLogUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: TimeLogCreateManyEmployeeInputEnvelope
    set?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    disconnect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    delete?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    connect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    update?: TimeLogUpdateWithWhereUniqueWithoutEmployeeInput | TimeLogUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: TimeLogUpdateManyWithWhereWithoutEmployeeInput | TimeLogUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: TimeLogScalarWhereInput | TimeLogScalarWhereInput[]
  }

  export type VoucherLogUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<VoucherLogCreateWithoutEmployeeInput, VoucherLogUncheckedCreateWithoutEmployeeInput> | VoucherLogCreateWithoutEmployeeInput[] | VoucherLogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: VoucherLogCreateOrConnectWithoutEmployeeInput | VoucherLogCreateOrConnectWithoutEmployeeInput[]
    upsert?: VoucherLogUpsertWithWhereUniqueWithoutEmployeeInput | VoucherLogUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: VoucherLogCreateManyEmployeeInputEnvelope
    set?: VoucherLogWhereUniqueInput | VoucherLogWhereUniqueInput[]
    disconnect?: VoucherLogWhereUniqueInput | VoucherLogWhereUniqueInput[]
    delete?: VoucherLogWhereUniqueInput | VoucherLogWhereUniqueInput[]
    connect?: VoucherLogWhereUniqueInput | VoucherLogWhereUniqueInput[]
    update?: VoucherLogUpdateWithWhereUniqueWithoutEmployeeInput | VoucherLogUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: VoucherLogUpdateManyWithWhereWithoutEmployeeInput | VoucherLogUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: VoucherLogScalarWhereInput | VoucherLogScalarWhereInput[]
  }

  export type TimeLogUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<TimeLogCreateWithoutEmployeeInput, TimeLogUncheckedCreateWithoutEmployeeInput> | TimeLogCreateWithoutEmployeeInput[] | TimeLogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TimeLogCreateOrConnectWithoutEmployeeInput | TimeLogCreateOrConnectWithoutEmployeeInput[]
    upsert?: TimeLogUpsertWithWhereUniqueWithoutEmployeeInput | TimeLogUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: TimeLogCreateManyEmployeeInputEnvelope
    set?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    disconnect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    delete?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    connect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    update?: TimeLogUpdateWithWhereUniqueWithoutEmployeeInput | TimeLogUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: TimeLogUpdateManyWithWhereWithoutEmployeeInput | TimeLogUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: TimeLogScalarWhereInput | TimeLogScalarWhereInput[]
  }

  export type VoucherLogUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<VoucherLogCreateWithoutEmployeeInput, VoucherLogUncheckedCreateWithoutEmployeeInput> | VoucherLogCreateWithoutEmployeeInput[] | VoucherLogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: VoucherLogCreateOrConnectWithoutEmployeeInput | VoucherLogCreateOrConnectWithoutEmployeeInput[]
    upsert?: VoucherLogUpsertWithWhereUniqueWithoutEmployeeInput | VoucherLogUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: VoucherLogCreateManyEmployeeInputEnvelope
    set?: VoucherLogWhereUniqueInput | VoucherLogWhereUniqueInput[]
    disconnect?: VoucherLogWhereUniqueInput | VoucherLogWhereUniqueInput[]
    delete?: VoucherLogWhereUniqueInput | VoucherLogWhereUniqueInput[]
    connect?: VoucherLogWhereUniqueInput | VoucherLogWhereUniqueInput[]
    update?: VoucherLogUpdateWithWhereUniqueWithoutEmployeeInput | VoucherLogUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: VoucherLogUpdateManyWithWhereWithoutEmployeeInput | VoucherLogUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: VoucherLogScalarWhereInput | VoucherLogScalarWhereInput[]
  }

  export type AdminCreatepermissionsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type AdminUpdatepermissionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type TimeLogCreateNestedManyWithoutSessionInput = {
    create?: XOR<TimeLogCreateWithoutSessionInput, TimeLogUncheckedCreateWithoutSessionInput> | TimeLogCreateWithoutSessionInput[] | TimeLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TimeLogCreateOrConnectWithoutSessionInput | TimeLogCreateOrConnectWithoutSessionInput[]
    createMany?: TimeLogCreateManySessionInputEnvelope
    connect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
  }

  export type TimeLogUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<TimeLogCreateWithoutSessionInput, TimeLogUncheckedCreateWithoutSessionInput> | TimeLogCreateWithoutSessionInput[] | TimeLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TimeLogCreateOrConnectWithoutSessionInput | TimeLogCreateOrConnectWithoutSessionInput[]
    createMany?: TimeLogCreateManySessionInputEnvelope
    connect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
  }

  export type EnumShiftRoleFieldUpdateOperationsInput = {
    set?: $Enums.ShiftRole
  }

  export type EnumShiftTypeFieldUpdateOperationsInput = {
    set?: $Enums.ShiftType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type TimeLogUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TimeLogCreateWithoutSessionInput, TimeLogUncheckedCreateWithoutSessionInput> | TimeLogCreateWithoutSessionInput[] | TimeLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TimeLogCreateOrConnectWithoutSessionInput | TimeLogCreateOrConnectWithoutSessionInput[]
    upsert?: TimeLogUpsertWithWhereUniqueWithoutSessionInput | TimeLogUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TimeLogCreateManySessionInputEnvelope
    set?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    disconnect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    delete?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    connect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    update?: TimeLogUpdateWithWhereUniqueWithoutSessionInput | TimeLogUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TimeLogUpdateManyWithWhereWithoutSessionInput | TimeLogUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TimeLogScalarWhereInput | TimeLogScalarWhereInput[]
  }

  export type TimeLogUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TimeLogCreateWithoutSessionInput, TimeLogUncheckedCreateWithoutSessionInput> | TimeLogCreateWithoutSessionInput[] | TimeLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TimeLogCreateOrConnectWithoutSessionInput | TimeLogCreateOrConnectWithoutSessionInput[]
    upsert?: TimeLogUpsertWithWhereUniqueWithoutSessionInput | TimeLogUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TimeLogCreateManySessionInputEnvelope
    set?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    disconnect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    delete?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    connect?: TimeLogWhereUniqueInput | TimeLogWhereUniqueInput[]
    update?: TimeLogUpdateWithWhereUniqueWithoutSessionInput | TimeLogUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TimeLogUpdateManyWithWhereWithoutSessionInput | TimeLogUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TimeLogScalarWhereInput | TimeLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTimeLogsInput = {
    create?: XOR<UserCreateWithoutTimeLogsInput, UserUncheckedCreateWithoutTimeLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutTimeLogsInput = {
    create?: XOR<EmployeeCreateWithoutTimeLogsInput, EmployeeUncheckedCreateWithoutTimeLogsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTimeLogsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type SessionCreateNestedOneWithoutTimeLogsInput = {
    create?: XOR<SessionCreateWithoutTimeLogsInput, SessionUncheckedCreateWithoutTimeLogsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTimeLogsInput
    connect?: SessionWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTimeLogStatusFieldUpdateOperationsInput = {
    set?: $Enums.TimeLogStatus
  }

  export type UserUpdateOneRequiredWithoutTimeLogsNestedInput = {
    create?: XOR<UserCreateWithoutTimeLogsInput, UserUncheckedCreateWithoutTimeLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeLogsInput
    upsert?: UserUpsertWithoutTimeLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeLogsInput, UserUpdateWithoutTimeLogsInput>, UserUncheckedUpdateWithoutTimeLogsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutTimeLogsNestedInput = {
    create?: XOR<EmployeeCreateWithoutTimeLogsInput, EmployeeUncheckedCreateWithoutTimeLogsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTimeLogsInput
    upsert?: EmployeeUpsertWithoutTimeLogsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutTimeLogsInput, EmployeeUpdateWithoutTimeLogsInput>, EmployeeUncheckedUpdateWithoutTimeLogsInput>
  }

  export type SessionUpdateOneRequiredWithoutTimeLogsNestedInput = {
    create?: XOR<SessionCreateWithoutTimeLogsInput, SessionUncheckedCreateWithoutTimeLogsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTimeLogsInput
    upsert?: SessionUpsertWithoutTimeLogsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutTimeLogsInput, SessionUpdateWithoutTimeLogsInput>, SessionUncheckedUpdateWithoutTimeLogsInput>
  }

  export type UserCreateNestedOneWithoutVouchersInput = {
    create?: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchersInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumVoucherStatusFieldUpdateOperationsInput = {
    set?: $Enums.VoucherStatus
  }

  export type UserUpdateOneRequiredWithoutVouchersNestedInput = {
    create?: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchersInput
    upsert?: UserUpsertWithoutVouchersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVouchersInput, UserUpdateWithoutVouchersInput>, UserUncheckedUpdateWithoutVouchersInput>
  }

  export type EmployeeCreateNestedOneWithoutVoucherLogsInput = {
    create?: XOR<EmployeeCreateWithoutVoucherLogsInput, EmployeeUncheckedCreateWithoutVoucherLogsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutVoucherLogsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutVoucherLogsNestedInput = {
    create?: XOR<EmployeeCreateWithoutVoucherLogsInput, EmployeeUncheckedCreateWithoutVoucherLogsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutVoucherLogsInput
    upsert?: EmployeeUpsertWithoutVoucherLogsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutVoucherLogsInput, EmployeeUpdateWithoutVoucherLogsInput>, EmployeeUncheckedUpdateWithoutVoucherLogsInput>
  }

  export type EnumPayPeriodStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayPeriodStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumShiftRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftRole | EnumShiftRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftRole[] | ListEnumShiftRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftRole[] | ListEnumShiftRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftRoleFilter<$PrismaModel> | $Enums.ShiftRole
  }

  export type NestedEnumShiftTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftType | EnumShiftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftTypeFilter<$PrismaModel> | $Enums.ShiftType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumShiftRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftRole | EnumShiftRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftRole[] | ListEnumShiftRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftRole[] | ListEnumShiftRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftRoleWithAggregatesFilter<$PrismaModel> | $Enums.ShiftRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftRoleFilter<$PrismaModel>
    _max?: NestedEnumShiftRoleFilter<$PrismaModel>
  }

  export type NestedEnumShiftTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftType | EnumShiftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShiftType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftTypeFilter<$PrismaModel>
    _max?: NestedEnumShiftTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTimeLogStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeLogStatus | EnumTimeLogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TimeLogStatus[] | ListEnumTimeLogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeLogStatus[] | ListEnumTimeLogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeLogStatusFilter<$PrismaModel> | $Enums.TimeLogStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumTimeLogStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeLogStatus | EnumTimeLogStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TimeLogStatus[] | ListEnumTimeLogStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeLogStatus[] | ListEnumTimeLogStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeLogStatusWithAggregatesFilter<$PrismaModel> | $Enums.TimeLogStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeLogStatusFilter<$PrismaModel>
    _max?: NestedEnumTimeLogStatusFilter<$PrismaModel>
  }

  export type NestedEnumVoucherStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VoucherStatus | EnumVoucherStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVoucherStatusFilter<$PrismaModel> | $Enums.VoucherStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumVoucherStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoucherStatus | EnumVoucherStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVoucherStatusWithAggregatesFilter<$PrismaModel> | $Enums.VoucherStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoucherStatusFilter<$PrismaModel>
    _max?: NestedEnumVoucherStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPayPeriodStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayPeriodStatus | EnumPayPeriodStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayPeriodStatus[] | ListEnumPayPeriodStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayPeriodStatus[] | ListEnumPayPeriodStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayPeriodStatusFilter<$PrismaModel> | $Enums.PayPeriodStatus
  }

  export type NestedEnumPayPeriodStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayPeriodStatus | EnumPayPeriodStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayPeriodStatus[] | ListEnumPayPeriodStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayPeriodStatus[] | ListEnumPayPeriodStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayPeriodStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayPeriodStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayPeriodStatusFilter<$PrismaModel>
    _max?: NestedEnumPayPeriodStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EmployeeCreateWithoutUserInput = {
    id?: string
    employeeId: string
    phone?: string | null
    department?: string | null
    hourlyRate: number
    bankAccount?: string | null
    taxId?: string | null
    roles?: EmployeeCreaterolesInput | string[]
    shiftPrefs?: EmployeeCreateshiftPrefsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    timeLogs?: TimeLogCreateNestedManyWithoutEmployeeInput
    voucherLogs?: VoucherLogCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: string
    employeeId: string
    phone?: string | null
    department?: string | null
    hourlyRate: number
    bankAccount?: string | null
    taxId?: string | null
    roles?: EmployeeCreaterolesInput | string[]
    shiftPrefs?: EmployeeCreateshiftPrefsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    timeLogs?: TimeLogUncheckedCreateNestedManyWithoutEmployeeInput
    voucherLogs?: VoucherLogUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
    permissions?: AdminCreatepermissionsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
    permissions?: AdminCreatepermissionsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    role: $Enums.ShiftRole
    shiftType: $Enums.ShiftType
    clockInTime: Date | string
    clockOutTime?: Date | string | null
    status?: $Enums.SessionStatus
    basePayAmount?: number | null
    tipsAmount?: number | null
    bonusAmount?: number | null
    dailyTotal?: number | null
    editedBy?: string | null
    editedAt?: Date | string | null
    editReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeLogs?: TimeLogCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    role: $Enums.ShiftRole
    shiftType: $Enums.ShiftType
    clockInTime: Date | string
    clockOutTime?: Date | string | null
    status?: $Enums.SessionStatus
    basePayAmount?: number | null
    tipsAmount?: number | null
    bonusAmount?: number | null
    dailyTotal?: number | null
    editedBy?: string | null
    editedAt?: Date | string | null
    editReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeLogs?: TimeLogUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimeLogCreateWithoutUserInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    roomBonus?: number | null
    roomValue?: number | null
    status?: $Enums.TimeLogStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutTimeLogsInput
    session: SessionCreateNestedOneWithoutTimeLogsInput
  }

  export type TimeLogUncheckedCreateWithoutUserInput = {
    id?: string
    employeeId: string
    sessionId: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    roomBonus?: number | null
    roomValue?: number | null
    status?: $Enums.TimeLogStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeLogCreateOrConnectWithoutUserInput = {
    where: TimeLogWhereUniqueInput
    create: XOR<TimeLogCreateWithoutUserInput, TimeLogUncheckedCreateWithoutUserInput>
  }

  export type TimeLogCreateManyUserInputEnvelope = {
    data: TimeLogCreateManyUserInput | TimeLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VoucherCreateWithoutUserInput = {
    id?: string
    cardNumber: string
    room: string
    passengerCount: number
    expiryDate?: string | null
    bonusAmount: number
    status?: $Enums.VoucherStatus
    declineReason?: string | null
    declinedAt?: Date | string | null
    scannedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoucherUncheckedCreateWithoutUserInput = {
    id?: string
    cardNumber: string
    room: string
    passengerCount: number
    expiryDate?: string | null
    bonusAmount: number
    status?: $Enums.VoucherStatus
    declineReason?: string | null
    declinedAt?: Date | string | null
    scannedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoucherCreateOrConnectWithoutUserInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput>
  }

  export type VoucherCreateManyUserInputEnvelope = {
    data: VoucherCreateManyUserInput | VoucherCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutUserInput = {
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EmployeeUpdaterolesInput | string[]
    shiftPrefs?: EmployeeUpdateshiftPrefsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLogs?: TimeLogUpdateManyWithoutEmployeeNestedInput
    voucherLogs?: VoucherLogUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EmployeeUpdaterolesInput | string[]
    shiftPrefs?: EmployeeUpdateshiftPrefsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLogs?: TimeLogUncheckedUpdateManyWithoutEmployeeNestedInput
    voucherLogs?: VoucherLogUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: AdminUpdatepermissionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissions?: AdminUpdatepermissionsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    role?: EnumShiftRoleFilter<"Session"> | $Enums.ShiftRole
    shiftType?: EnumShiftTypeFilter<"Session"> | $Enums.ShiftType
    clockInTime?: DateTimeFilter<"Session"> | Date | string
    clockOutTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    basePayAmount?: FloatNullableFilter<"Session"> | number | null
    tipsAmount?: FloatNullableFilter<"Session"> | number | null
    bonusAmount?: FloatNullableFilter<"Session"> | number | null
    dailyTotal?: FloatNullableFilter<"Session"> | number | null
    editedBy?: StringNullableFilter<"Session"> | string | null
    editedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    editReason?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type TimeLogUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeLogWhereUniqueInput
    update: XOR<TimeLogUpdateWithoutUserInput, TimeLogUncheckedUpdateWithoutUserInput>
    create: XOR<TimeLogCreateWithoutUserInput, TimeLogUncheckedCreateWithoutUserInput>
  }

  export type TimeLogUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeLogWhereUniqueInput
    data: XOR<TimeLogUpdateWithoutUserInput, TimeLogUncheckedUpdateWithoutUserInput>
  }

  export type TimeLogUpdateManyWithWhereWithoutUserInput = {
    where: TimeLogScalarWhereInput
    data: XOR<TimeLogUpdateManyMutationInput, TimeLogUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeLogScalarWhereInput = {
    AND?: TimeLogScalarWhereInput | TimeLogScalarWhereInput[]
    OR?: TimeLogScalarWhereInput[]
    NOT?: TimeLogScalarWhereInput | TimeLogScalarWhereInput[]
    id?: StringFilter<"TimeLog"> | string
    userId?: StringFilter<"TimeLog"> | string
    employeeId?: StringFilter<"TimeLog"> | string
    sessionId?: StringFilter<"TimeLog"> | string
    startTime?: DateTimeFilter<"TimeLog"> | Date | string
    endTime?: DateTimeNullableFilter<"TimeLog"> | Date | string | null
    duration?: IntNullableFilter<"TimeLog"> | number | null
    roomBonus?: IntNullableFilter<"TimeLog"> | number | null
    roomValue?: FloatNullableFilter<"TimeLog"> | number | null
    status?: EnumTimeLogStatusFilter<"TimeLog"> | $Enums.TimeLogStatus
    createdAt?: DateTimeFilter<"TimeLog"> | Date | string
    updatedAt?: DateTimeFilter<"TimeLog"> | Date | string
  }

  export type VoucherUpsertWithWhereUniqueWithoutUserInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutUserInput, VoucherUncheckedUpdateWithoutUserInput>
    create: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutUserInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutUserInput, VoucherUncheckedUpdateWithoutUserInput>
  }

  export type VoucherUpdateManyWithWhereWithoutUserInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutUserInput>
  }

  export type VoucherScalarWhereInput = {
    AND?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    OR?: VoucherScalarWhereInput[]
    NOT?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    id?: StringFilter<"Voucher"> | string
    userId?: StringFilter<"Voucher"> | string
    cardNumber?: StringFilter<"Voucher"> | string
    room?: StringFilter<"Voucher"> | string
    passengerCount?: IntFilter<"Voucher"> | number
    expiryDate?: StringNullableFilter<"Voucher"> | string | null
    bonusAmount?: FloatFilter<"Voucher"> | number
    status?: EnumVoucherStatusFilter<"Voucher"> | $Enums.VoucherStatus
    declineReason?: StringNullableFilter<"Voucher"> | string | null
    declinedAt?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    scannedAt?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    updatedAt?: DateTimeFilter<"Voucher"> | Date | string
  }

  export type UserCreateWithoutEmployeeInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    timeLogs?: TimeLogCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeeInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    timeLogs?: TimeLogUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
  }

  export type TimeLogCreateWithoutEmployeeInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    roomBonus?: number | null
    roomValue?: number | null
    status?: $Enums.TimeLogStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimeLogsInput
    session: SessionCreateNestedOneWithoutTimeLogsInput
  }

  export type TimeLogUncheckedCreateWithoutEmployeeInput = {
    id?: string
    userId: string
    sessionId: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    roomBonus?: number | null
    roomValue?: number | null
    status?: $Enums.TimeLogStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeLogCreateOrConnectWithoutEmployeeInput = {
    where: TimeLogWhereUniqueInput
    create: XOR<TimeLogCreateWithoutEmployeeInput, TimeLogUncheckedCreateWithoutEmployeeInput>
  }

  export type TimeLogCreateManyEmployeeInputEnvelope = {
    data: TimeLogCreateManyEmployeeInput | TimeLogCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type VoucherLogCreateWithoutEmployeeInput = {
    id?: string
    voucherId: string
    action: string
    details: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type VoucherLogUncheckedCreateWithoutEmployeeInput = {
    id?: string
    voucherId: string
    action: string
    details: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type VoucherLogCreateOrConnectWithoutEmployeeInput = {
    where: VoucherLogWhereUniqueInput
    create: XOR<VoucherLogCreateWithoutEmployeeInput, VoucherLogUncheckedCreateWithoutEmployeeInput>
  }

  export type VoucherLogCreateManyEmployeeInputEnvelope = {
    data: VoucherLogCreateManyEmployeeInput | VoucherLogCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEmployeeInput = {
    update: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type UserUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    timeLogs?: TimeLogUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    timeLogs?: TimeLogUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TimeLogUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: TimeLogWhereUniqueInput
    update: XOR<TimeLogUpdateWithoutEmployeeInput, TimeLogUncheckedUpdateWithoutEmployeeInput>
    create: XOR<TimeLogCreateWithoutEmployeeInput, TimeLogUncheckedCreateWithoutEmployeeInput>
  }

  export type TimeLogUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: TimeLogWhereUniqueInput
    data: XOR<TimeLogUpdateWithoutEmployeeInput, TimeLogUncheckedUpdateWithoutEmployeeInput>
  }

  export type TimeLogUpdateManyWithWhereWithoutEmployeeInput = {
    where: TimeLogScalarWhereInput
    data: XOR<TimeLogUpdateManyMutationInput, TimeLogUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type VoucherLogUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: VoucherLogWhereUniqueInput
    update: XOR<VoucherLogUpdateWithoutEmployeeInput, VoucherLogUncheckedUpdateWithoutEmployeeInput>
    create: XOR<VoucherLogCreateWithoutEmployeeInput, VoucherLogUncheckedCreateWithoutEmployeeInput>
  }

  export type VoucherLogUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: VoucherLogWhereUniqueInput
    data: XOR<VoucherLogUpdateWithoutEmployeeInput, VoucherLogUncheckedUpdateWithoutEmployeeInput>
  }

  export type VoucherLogUpdateManyWithWhereWithoutEmployeeInput = {
    where: VoucherLogScalarWhereInput
    data: XOR<VoucherLogUpdateManyMutationInput, VoucherLogUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type VoucherLogScalarWhereInput = {
    AND?: VoucherLogScalarWhereInput | VoucherLogScalarWhereInput[]
    OR?: VoucherLogScalarWhereInput[]
    NOT?: VoucherLogScalarWhereInput | VoucherLogScalarWhereInput[]
    id?: StringFilter<"VoucherLog"> | string
    employeeId?: StringFilter<"VoucherLog"> | string
    voucherId?: StringFilter<"VoucherLog"> | string
    action?: StringFilter<"VoucherLog"> | string
    details?: JsonFilter<"VoucherLog">
    createdAt?: DateTimeFilter<"VoucherLog"> | Date | string
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    timeLogs?: TimeLogCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    timeLogs?: TimeLogUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    timeLogs?: TimeLogUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    timeLogs?: TimeLogUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
    timeLogs?: TimeLogCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    timeLogs?: TimeLogUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type TimeLogCreateWithoutSessionInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    roomBonus?: number | null
    roomValue?: number | null
    status?: $Enums.TimeLogStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTimeLogsInput
    employee: EmployeeCreateNestedOneWithoutTimeLogsInput
  }

  export type TimeLogUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    employeeId: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    roomBonus?: number | null
    roomValue?: number | null
    status?: $Enums.TimeLogStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeLogCreateOrConnectWithoutSessionInput = {
    where: TimeLogWhereUniqueInput
    create: XOR<TimeLogCreateWithoutSessionInput, TimeLogUncheckedCreateWithoutSessionInput>
  }

  export type TimeLogCreateManySessionInputEnvelope = {
    data: TimeLogCreateManySessionInput | TimeLogCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
    timeLogs?: TimeLogUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    timeLogs?: TimeLogUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TimeLogUpsertWithWhereUniqueWithoutSessionInput = {
    where: TimeLogWhereUniqueInput
    update: XOR<TimeLogUpdateWithoutSessionInput, TimeLogUncheckedUpdateWithoutSessionInput>
    create: XOR<TimeLogCreateWithoutSessionInput, TimeLogUncheckedCreateWithoutSessionInput>
  }

  export type TimeLogUpdateWithWhereUniqueWithoutSessionInput = {
    where: TimeLogWhereUniqueInput
    data: XOR<TimeLogUpdateWithoutSessionInput, TimeLogUncheckedUpdateWithoutSessionInput>
  }

  export type TimeLogUpdateManyWithWhereWithoutSessionInput = {
    where: TimeLogScalarWhereInput
    data: XOR<TimeLogUpdateManyMutationInput, TimeLogUncheckedUpdateManyWithoutSessionInput>
  }

  export type UserCreateWithoutTimeLogsInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimeLogsInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimeLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeLogsInput, UserUncheckedCreateWithoutTimeLogsInput>
  }

  export type EmployeeCreateWithoutTimeLogsInput = {
    id?: string
    employeeId: string
    phone?: string | null
    department?: string | null
    hourlyRate: number
    bankAccount?: string | null
    taxId?: string | null
    roles?: EmployeeCreaterolesInput | string[]
    shiftPrefs?: EmployeeCreateshiftPrefsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    voucherLogs?: VoucherLogCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutTimeLogsInput = {
    id?: string
    userId: string
    employeeId: string
    phone?: string | null
    department?: string | null
    hourlyRate: number
    bankAccount?: string | null
    taxId?: string | null
    roles?: EmployeeCreaterolesInput | string[]
    shiftPrefs?: EmployeeCreateshiftPrefsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    voucherLogs?: VoucherLogUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutTimeLogsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutTimeLogsInput, EmployeeUncheckedCreateWithoutTimeLogsInput>
  }

  export type SessionCreateWithoutTimeLogsInput = {
    id?: string
    role: $Enums.ShiftRole
    shiftType: $Enums.ShiftType
    clockInTime: Date | string
    clockOutTime?: Date | string | null
    status?: $Enums.SessionStatus
    basePayAmount?: number | null
    tipsAmount?: number | null
    bonusAmount?: number | null
    dailyTotal?: number | null
    editedBy?: string | null
    editedAt?: Date | string | null
    editReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutTimeLogsInput = {
    id?: string
    userId: string
    role: $Enums.ShiftRole
    shiftType: $Enums.ShiftType
    clockInTime: Date | string
    clockOutTime?: Date | string | null
    status?: $Enums.SessionStatus
    basePayAmount?: number | null
    tipsAmount?: number | null
    bonusAmount?: number | null
    dailyTotal?: number | null
    editedBy?: string | null
    editedAt?: Date | string | null
    editReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutTimeLogsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutTimeLogsInput, SessionUncheckedCreateWithoutTimeLogsInput>
  }

  export type UserUpsertWithoutTimeLogsInput = {
    update: XOR<UserUpdateWithoutTimeLogsInput, UserUncheckedUpdateWithoutTimeLogsInput>
    create: XOR<UserCreateWithoutTimeLogsInput, UserUncheckedCreateWithoutTimeLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeLogsInput, UserUncheckedUpdateWithoutTimeLogsInput>
  }

  export type UserUpdateWithoutTimeLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmployeeUpsertWithoutTimeLogsInput = {
    update: XOR<EmployeeUpdateWithoutTimeLogsInput, EmployeeUncheckedUpdateWithoutTimeLogsInput>
    create: XOR<EmployeeCreateWithoutTimeLogsInput, EmployeeUncheckedCreateWithoutTimeLogsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutTimeLogsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutTimeLogsInput, EmployeeUncheckedUpdateWithoutTimeLogsInput>
  }

  export type EmployeeUpdateWithoutTimeLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EmployeeUpdaterolesInput | string[]
    shiftPrefs?: EmployeeUpdateshiftPrefsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    voucherLogs?: VoucherLogUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutTimeLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EmployeeUpdaterolesInput | string[]
    shiftPrefs?: EmployeeUpdateshiftPrefsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherLogs?: VoucherLogUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type SessionUpsertWithoutTimeLogsInput = {
    update: XOR<SessionUpdateWithoutTimeLogsInput, SessionUncheckedUpdateWithoutTimeLogsInput>
    create: XOR<SessionCreateWithoutTimeLogsInput, SessionUncheckedCreateWithoutTimeLogsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutTimeLogsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutTimeLogsInput, SessionUncheckedUpdateWithoutTimeLogsInput>
  }

  export type SessionUpdateWithoutTimeLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShiftRoleFieldUpdateOperationsInput | $Enums.ShiftRole
    shiftType?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    clockInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    basePayAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tipsAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    bonusAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    dailyTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutTimeLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumShiftRoleFieldUpdateOperationsInput | $Enums.ShiftRole
    shiftType?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    clockInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    basePayAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tipsAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    bonusAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    dailyTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutVouchersInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    timeLogs?: TimeLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVouchersInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    timeLogs?: TimeLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVouchersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
  }

  export type UserUpsertWithoutVouchersInput = {
    update: XOR<UserUpdateWithoutVouchersInput, UserUncheckedUpdateWithoutVouchersInput>
    create: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVouchersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVouchersInput, UserUncheckedUpdateWithoutVouchersInput>
  }

  export type UserUpdateWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    timeLogs?: TimeLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    timeLogs?: TimeLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmployeeCreateWithoutVoucherLogsInput = {
    id?: string
    employeeId: string
    phone?: string | null
    department?: string | null
    hourlyRate: number
    bankAccount?: string | null
    taxId?: string | null
    roles?: EmployeeCreaterolesInput | string[]
    shiftPrefs?: EmployeeCreateshiftPrefsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmployeeInput
    timeLogs?: TimeLogCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutVoucherLogsInput = {
    id?: string
    userId: string
    employeeId: string
    phone?: string | null
    department?: string | null
    hourlyRate: number
    bankAccount?: string | null
    taxId?: string | null
    roles?: EmployeeCreaterolesInput | string[]
    shiftPrefs?: EmployeeCreateshiftPrefsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    timeLogs?: TimeLogUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutVoucherLogsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutVoucherLogsInput, EmployeeUncheckedCreateWithoutVoucherLogsInput>
  }

  export type EmployeeUpsertWithoutVoucherLogsInput = {
    update: XOR<EmployeeUpdateWithoutVoucherLogsInput, EmployeeUncheckedUpdateWithoutVoucherLogsInput>
    create: XOR<EmployeeCreateWithoutVoucherLogsInput, EmployeeUncheckedCreateWithoutVoucherLogsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutVoucherLogsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutVoucherLogsInput, EmployeeUncheckedUpdateWithoutVoucherLogsInput>
  }

  export type EmployeeUpdateWithoutVoucherLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EmployeeUpdaterolesInput | string[]
    shiftPrefs?: EmployeeUpdateshiftPrefsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployeeNestedInput
    timeLogs?: TimeLogUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutVoucherLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EmployeeUpdaterolesInput | string[]
    shiftPrefs?: EmployeeUpdateshiftPrefsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLogs?: TimeLogUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    role: $Enums.ShiftRole
    shiftType: $Enums.ShiftType
    clockInTime: Date | string
    clockOutTime?: Date | string | null
    status?: $Enums.SessionStatus
    basePayAmount?: number | null
    tipsAmount?: number | null
    bonusAmount?: number | null
    dailyTotal?: number | null
    editedBy?: string | null
    editedAt?: Date | string | null
    editReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeLogCreateManyUserInput = {
    id?: string
    employeeId: string
    sessionId: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    roomBonus?: number | null
    roomValue?: number | null
    status?: $Enums.TimeLogStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoucherCreateManyUserInput = {
    id?: string
    cardNumber: string
    room: string
    passengerCount: number
    expiryDate?: string | null
    bonusAmount: number
    status?: $Enums.VoucherStatus
    declineReason?: string | null
    declinedAt?: Date | string | null
    scannedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShiftRoleFieldUpdateOperationsInput | $Enums.ShiftRole
    shiftType?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    clockInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    basePayAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tipsAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    bonusAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    dailyTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLogs?: TimeLogUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShiftRoleFieldUpdateOperationsInput | $Enums.ShiftRole
    shiftType?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    clockInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    basePayAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tipsAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    bonusAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    dailyTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeLogs?: TimeLogUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShiftRoleFieldUpdateOperationsInput | $Enums.ShiftRole
    shiftType?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    clockInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    basePayAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    tipsAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    bonusAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    dailyTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    editedBy?: NullableStringFieldUpdateOperationsInput | string | null
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    editReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutTimeLogsNestedInput
    session?: SessionUpdateOneRequiredWithoutTimeLogsNestedInput
  }

  export type TimeLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    bonusAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    bonusAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    bonusAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    declineReason?: NullableStringFieldUpdateOperationsInput | string | null
    declinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeLogCreateManyEmployeeInput = {
    id?: string
    userId: string
    sessionId: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    roomBonus?: number | null
    roomValue?: number | null
    status?: $Enums.TimeLogStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoucherLogCreateManyEmployeeInput = {
    id?: string
    voucherId: string
    action: string
    details: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TimeLogUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeLogsNestedInput
    session?: SessionUpdateOneRequiredWithoutTimeLogsNestedInput
  }

  export type TimeLogUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeLogUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherLogUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherLogUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherLogUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeLogCreateManySessionInput = {
    id?: string
    userId: string
    employeeId: string
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    roomBonus?: number | null
    roomValue?: number | null
    status?: $Enums.TimeLogStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeLogUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeLogsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutTimeLogsNestedInput
  }

  export type TimeLogUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeLogUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    roomBonus?: NullableIntFieldUpdateOperationsInput | number | null
    roomValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumTimeLogStatusFieldUpdateOperationsInput | $Enums.TimeLogStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}