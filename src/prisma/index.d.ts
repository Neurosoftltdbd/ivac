
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model IvacPanelCode
 * 
 */
export type IvacPanelCode = $Result.DefaultSelection<Prisma.$IvacPanelCodePayload>
/**
 * Model IvacCustomer
 * 
 */
export type IvacCustomer = $Result.DefaultSelection<Prisma.$IvacCustomerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
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
   * `prisma.ivacPanelCode`: Exposes CRUD operations for the **IvacPanelCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IvacPanelCodes
    * const ivacPanelCodes = await prisma.ivacPanelCode.findMany()
    * ```
    */
  get ivacPanelCode(): Prisma.IvacPanelCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ivacCustomer`: Exposes CRUD operations for the **IvacCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IvacCustomers
    * const ivacCustomers = await prisma.ivacCustomer.findMany()
    * ```
    */
  get ivacCustomer(): Prisma.IvacCustomerDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    IvacPanelCode: 'IvacPanelCode',
    IvacCustomer: 'IvacCustomer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "ivacPanelCode" | "ivacCustomer"
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
      IvacPanelCode: {
        payload: Prisma.$IvacPanelCodePayload<ExtArgs>
        fields: Prisma.IvacPanelCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IvacPanelCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacPanelCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IvacPanelCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacPanelCodePayload>
          }
          findFirst: {
            args: Prisma.IvacPanelCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacPanelCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IvacPanelCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacPanelCodePayload>
          }
          findMany: {
            args: Prisma.IvacPanelCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacPanelCodePayload>[]
          }
          create: {
            args: Prisma.IvacPanelCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacPanelCodePayload>
          }
          createMany: {
            args: Prisma.IvacPanelCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IvacPanelCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacPanelCodePayload>[]
          }
          delete: {
            args: Prisma.IvacPanelCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacPanelCodePayload>
          }
          update: {
            args: Prisma.IvacPanelCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacPanelCodePayload>
          }
          deleteMany: {
            args: Prisma.IvacPanelCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IvacPanelCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IvacPanelCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacPanelCodePayload>[]
          }
          upsert: {
            args: Prisma.IvacPanelCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacPanelCodePayload>
          }
          aggregate: {
            args: Prisma.IvacPanelCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIvacPanelCode>
          }
          groupBy: {
            args: Prisma.IvacPanelCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IvacPanelCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IvacPanelCodeCountArgs<ExtArgs>
            result: $Utils.Optional<IvacPanelCodeCountAggregateOutputType> | number
          }
        }
      }
      IvacCustomer: {
        payload: Prisma.$IvacCustomerPayload<ExtArgs>
        fields: Prisma.IvacCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IvacCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IvacCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacCustomerPayload>
          }
          findFirst: {
            args: Prisma.IvacCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IvacCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacCustomerPayload>
          }
          findMany: {
            args: Prisma.IvacCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacCustomerPayload>[]
          }
          create: {
            args: Prisma.IvacCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacCustomerPayload>
          }
          createMany: {
            args: Prisma.IvacCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IvacCustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacCustomerPayload>[]
          }
          delete: {
            args: Prisma.IvacCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacCustomerPayload>
          }
          update: {
            args: Prisma.IvacCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacCustomerPayload>
          }
          deleteMany: {
            args: Prisma.IvacCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IvacCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IvacCustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacCustomerPayload>[]
          }
          upsert: {
            args: Prisma.IvacCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IvacCustomerPayload>
          }
          aggregate: {
            args: Prisma.IvacCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIvacCustomer>
          }
          groupBy: {
            args: Prisma.IvacCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<IvacCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.IvacCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<IvacCustomerCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    ivacPanelCode?: IvacPanelCodeOmit
    ivacCustomer?: IvacCustomerOmit
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
    codes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codes?: boolean | UserCountOutputTypeCountCodesArgs
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
  export type UserCountOutputTypeCountCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IvacPanelCodeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    mobile: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    mobile: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    mobile: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    mobile?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    mobile?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    mobile?: true
    address?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string
    password: string
    role: string
    mobile: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    mobile?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    codes?: boolean | User$codesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    mobile?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    mobile?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    mobile?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "mobile" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codes?: boolean | User$codesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      codes: Prisma.$IvacPanelCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string
      role: string
      mobile: string | null
      address: string | null
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
    codes<T extends User$codesArgs<ExtArgs> = {}>(args?: Subset<T, User$codesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IvacPanelCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
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
   * User.codes
   */
  export type User$codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeInclude<ExtArgs> | null
    where?: IvacPanelCodeWhereInput
    orderBy?: IvacPanelCodeOrderByWithRelationInput | IvacPanelCodeOrderByWithRelationInput[]
    cursor?: IvacPanelCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IvacPanelCodeScalarFieldEnum | IvacPanelCodeScalarFieldEnum[]
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
   * Model IvacPanelCode
   */

  export type AggregateIvacPanelCode = {
    _count: IvacPanelCodeCountAggregateOutputType | null
    _avg: IvacPanelCodeAvgAggregateOutputType | null
    _sum: IvacPanelCodeSumAggregateOutputType | null
    _min: IvacPanelCodeMinAggregateOutputType | null
    _max: IvacPanelCodeMaxAggregateOutputType | null
  }

  export type IvacPanelCodeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type IvacPanelCodeSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type IvacPanelCodeMinAggregateOutputType = {
    id: number | null
    code: string | null
    obsfucatedCode: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IvacPanelCodeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    obsfucatedCode: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IvacPanelCodeCountAggregateOutputType = {
    id: number
    code: number
    obsfucatedCode: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IvacPanelCodeAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type IvacPanelCodeSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type IvacPanelCodeMinAggregateInputType = {
    id?: true
    code?: true
    obsfucatedCode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IvacPanelCodeMaxAggregateInputType = {
    id?: true
    code?: true
    obsfucatedCode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IvacPanelCodeCountAggregateInputType = {
    id?: true
    code?: true
    obsfucatedCode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IvacPanelCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IvacPanelCode to aggregate.
     */
    where?: IvacPanelCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IvacPanelCodes to fetch.
     */
    orderBy?: IvacPanelCodeOrderByWithRelationInput | IvacPanelCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IvacPanelCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IvacPanelCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IvacPanelCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IvacPanelCodes
    **/
    _count?: true | IvacPanelCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IvacPanelCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IvacPanelCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IvacPanelCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IvacPanelCodeMaxAggregateInputType
  }

  export type GetIvacPanelCodeAggregateType<T extends IvacPanelCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateIvacPanelCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIvacPanelCode[P]>
      : GetScalarType<T[P], AggregateIvacPanelCode[P]>
  }




  export type IvacPanelCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IvacPanelCodeWhereInput
    orderBy?: IvacPanelCodeOrderByWithAggregationInput | IvacPanelCodeOrderByWithAggregationInput[]
    by: IvacPanelCodeScalarFieldEnum[] | IvacPanelCodeScalarFieldEnum
    having?: IvacPanelCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IvacPanelCodeCountAggregateInputType | true
    _avg?: IvacPanelCodeAvgAggregateInputType
    _sum?: IvacPanelCodeSumAggregateInputType
    _min?: IvacPanelCodeMinAggregateInputType
    _max?: IvacPanelCodeMaxAggregateInputType
  }

  export type IvacPanelCodeGroupByOutputType = {
    id: number
    code: string
    obsfucatedCode: string
    userId: number | null
    createdAt: Date
    updatedAt: Date
    _count: IvacPanelCodeCountAggregateOutputType | null
    _avg: IvacPanelCodeAvgAggregateOutputType | null
    _sum: IvacPanelCodeSumAggregateOutputType | null
    _min: IvacPanelCodeMinAggregateOutputType | null
    _max: IvacPanelCodeMaxAggregateOutputType | null
  }

  type GetIvacPanelCodeGroupByPayload<T extends IvacPanelCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IvacPanelCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IvacPanelCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IvacPanelCodeGroupByOutputType[P]>
            : GetScalarType<T[P], IvacPanelCodeGroupByOutputType[P]>
        }
      >
    >


  export type IvacPanelCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    obsfucatedCode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | IvacPanelCode$userArgs<ExtArgs>
  }, ExtArgs["result"]["ivacPanelCode"]>

  export type IvacPanelCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    obsfucatedCode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | IvacPanelCode$userArgs<ExtArgs>
  }, ExtArgs["result"]["ivacPanelCode"]>

  export type IvacPanelCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    obsfucatedCode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | IvacPanelCode$userArgs<ExtArgs>
  }, ExtArgs["result"]["ivacPanelCode"]>

  export type IvacPanelCodeSelectScalar = {
    id?: boolean
    code?: boolean
    obsfucatedCode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IvacPanelCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "obsfucatedCode" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["ivacPanelCode"]>
  export type IvacPanelCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | IvacPanelCode$userArgs<ExtArgs>
  }
  export type IvacPanelCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | IvacPanelCode$userArgs<ExtArgs>
  }
  export type IvacPanelCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | IvacPanelCode$userArgs<ExtArgs>
  }

  export type $IvacPanelCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IvacPanelCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      obsfucatedCode: string
      userId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ivacPanelCode"]>
    composites: {}
  }

  type IvacPanelCodeGetPayload<S extends boolean | null | undefined | IvacPanelCodeDefaultArgs> = $Result.GetResult<Prisma.$IvacPanelCodePayload, S>

  type IvacPanelCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IvacPanelCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IvacPanelCodeCountAggregateInputType | true
    }

  export interface IvacPanelCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IvacPanelCode'], meta: { name: 'IvacPanelCode' } }
    /**
     * Find zero or one IvacPanelCode that matches the filter.
     * @param {IvacPanelCodeFindUniqueArgs} args - Arguments to find a IvacPanelCode
     * @example
     * // Get one IvacPanelCode
     * const ivacPanelCode = await prisma.ivacPanelCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IvacPanelCodeFindUniqueArgs>(args: SelectSubset<T, IvacPanelCodeFindUniqueArgs<ExtArgs>>): Prisma__IvacPanelCodeClient<$Result.GetResult<Prisma.$IvacPanelCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IvacPanelCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IvacPanelCodeFindUniqueOrThrowArgs} args - Arguments to find a IvacPanelCode
     * @example
     * // Get one IvacPanelCode
     * const ivacPanelCode = await prisma.ivacPanelCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IvacPanelCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, IvacPanelCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IvacPanelCodeClient<$Result.GetResult<Prisma.$IvacPanelCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IvacPanelCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacPanelCodeFindFirstArgs} args - Arguments to find a IvacPanelCode
     * @example
     * // Get one IvacPanelCode
     * const ivacPanelCode = await prisma.ivacPanelCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IvacPanelCodeFindFirstArgs>(args?: SelectSubset<T, IvacPanelCodeFindFirstArgs<ExtArgs>>): Prisma__IvacPanelCodeClient<$Result.GetResult<Prisma.$IvacPanelCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IvacPanelCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacPanelCodeFindFirstOrThrowArgs} args - Arguments to find a IvacPanelCode
     * @example
     * // Get one IvacPanelCode
     * const ivacPanelCode = await prisma.ivacPanelCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IvacPanelCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, IvacPanelCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__IvacPanelCodeClient<$Result.GetResult<Prisma.$IvacPanelCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IvacPanelCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacPanelCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IvacPanelCodes
     * const ivacPanelCodes = await prisma.ivacPanelCode.findMany()
     * 
     * // Get first 10 IvacPanelCodes
     * const ivacPanelCodes = await prisma.ivacPanelCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ivacPanelCodeWithIdOnly = await prisma.ivacPanelCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IvacPanelCodeFindManyArgs>(args?: SelectSubset<T, IvacPanelCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IvacPanelCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IvacPanelCode.
     * @param {IvacPanelCodeCreateArgs} args - Arguments to create a IvacPanelCode.
     * @example
     * // Create one IvacPanelCode
     * const IvacPanelCode = await prisma.ivacPanelCode.create({
     *   data: {
     *     // ... data to create a IvacPanelCode
     *   }
     * })
     * 
     */
    create<T extends IvacPanelCodeCreateArgs>(args: SelectSubset<T, IvacPanelCodeCreateArgs<ExtArgs>>): Prisma__IvacPanelCodeClient<$Result.GetResult<Prisma.$IvacPanelCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IvacPanelCodes.
     * @param {IvacPanelCodeCreateManyArgs} args - Arguments to create many IvacPanelCodes.
     * @example
     * // Create many IvacPanelCodes
     * const ivacPanelCode = await prisma.ivacPanelCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IvacPanelCodeCreateManyArgs>(args?: SelectSubset<T, IvacPanelCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IvacPanelCodes and returns the data saved in the database.
     * @param {IvacPanelCodeCreateManyAndReturnArgs} args - Arguments to create many IvacPanelCodes.
     * @example
     * // Create many IvacPanelCodes
     * const ivacPanelCode = await prisma.ivacPanelCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IvacPanelCodes and only return the `id`
     * const ivacPanelCodeWithIdOnly = await prisma.ivacPanelCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IvacPanelCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, IvacPanelCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IvacPanelCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IvacPanelCode.
     * @param {IvacPanelCodeDeleteArgs} args - Arguments to delete one IvacPanelCode.
     * @example
     * // Delete one IvacPanelCode
     * const IvacPanelCode = await prisma.ivacPanelCode.delete({
     *   where: {
     *     // ... filter to delete one IvacPanelCode
     *   }
     * })
     * 
     */
    delete<T extends IvacPanelCodeDeleteArgs>(args: SelectSubset<T, IvacPanelCodeDeleteArgs<ExtArgs>>): Prisma__IvacPanelCodeClient<$Result.GetResult<Prisma.$IvacPanelCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IvacPanelCode.
     * @param {IvacPanelCodeUpdateArgs} args - Arguments to update one IvacPanelCode.
     * @example
     * // Update one IvacPanelCode
     * const ivacPanelCode = await prisma.ivacPanelCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IvacPanelCodeUpdateArgs>(args: SelectSubset<T, IvacPanelCodeUpdateArgs<ExtArgs>>): Prisma__IvacPanelCodeClient<$Result.GetResult<Prisma.$IvacPanelCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IvacPanelCodes.
     * @param {IvacPanelCodeDeleteManyArgs} args - Arguments to filter IvacPanelCodes to delete.
     * @example
     * // Delete a few IvacPanelCodes
     * const { count } = await prisma.ivacPanelCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IvacPanelCodeDeleteManyArgs>(args?: SelectSubset<T, IvacPanelCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IvacPanelCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacPanelCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IvacPanelCodes
     * const ivacPanelCode = await prisma.ivacPanelCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IvacPanelCodeUpdateManyArgs>(args: SelectSubset<T, IvacPanelCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IvacPanelCodes and returns the data updated in the database.
     * @param {IvacPanelCodeUpdateManyAndReturnArgs} args - Arguments to update many IvacPanelCodes.
     * @example
     * // Update many IvacPanelCodes
     * const ivacPanelCode = await prisma.ivacPanelCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IvacPanelCodes and only return the `id`
     * const ivacPanelCodeWithIdOnly = await prisma.ivacPanelCode.updateManyAndReturn({
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
    updateManyAndReturn<T extends IvacPanelCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, IvacPanelCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IvacPanelCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IvacPanelCode.
     * @param {IvacPanelCodeUpsertArgs} args - Arguments to update or create a IvacPanelCode.
     * @example
     * // Update or create a IvacPanelCode
     * const ivacPanelCode = await prisma.ivacPanelCode.upsert({
     *   create: {
     *     // ... data to create a IvacPanelCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IvacPanelCode we want to update
     *   }
     * })
     */
    upsert<T extends IvacPanelCodeUpsertArgs>(args: SelectSubset<T, IvacPanelCodeUpsertArgs<ExtArgs>>): Prisma__IvacPanelCodeClient<$Result.GetResult<Prisma.$IvacPanelCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IvacPanelCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacPanelCodeCountArgs} args - Arguments to filter IvacPanelCodes to count.
     * @example
     * // Count the number of IvacPanelCodes
     * const count = await prisma.ivacPanelCode.count({
     *   where: {
     *     // ... the filter for the IvacPanelCodes we want to count
     *   }
     * })
    **/
    count<T extends IvacPanelCodeCountArgs>(
      args?: Subset<T, IvacPanelCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IvacPanelCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IvacPanelCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacPanelCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IvacPanelCodeAggregateArgs>(args: Subset<T, IvacPanelCodeAggregateArgs>): Prisma.PrismaPromise<GetIvacPanelCodeAggregateType<T>>

    /**
     * Group by IvacPanelCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacPanelCodeGroupByArgs} args - Group by arguments.
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
      T extends IvacPanelCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IvacPanelCodeGroupByArgs['orderBy'] }
        : { orderBy?: IvacPanelCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IvacPanelCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIvacPanelCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IvacPanelCode model
   */
  readonly fields: IvacPanelCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IvacPanelCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IvacPanelCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends IvacPanelCode$userArgs<ExtArgs> = {}>(args?: Subset<T, IvacPanelCode$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IvacPanelCode model
   */
  interface IvacPanelCodeFieldRefs {
    readonly id: FieldRef<"IvacPanelCode", 'Int'>
    readonly code: FieldRef<"IvacPanelCode", 'String'>
    readonly obsfucatedCode: FieldRef<"IvacPanelCode", 'String'>
    readonly userId: FieldRef<"IvacPanelCode", 'Int'>
    readonly createdAt: FieldRef<"IvacPanelCode", 'DateTime'>
    readonly updatedAt: FieldRef<"IvacPanelCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IvacPanelCode findUnique
   */
  export type IvacPanelCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeInclude<ExtArgs> | null
    /**
     * Filter, which IvacPanelCode to fetch.
     */
    where: IvacPanelCodeWhereUniqueInput
  }

  /**
   * IvacPanelCode findUniqueOrThrow
   */
  export type IvacPanelCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeInclude<ExtArgs> | null
    /**
     * Filter, which IvacPanelCode to fetch.
     */
    where: IvacPanelCodeWhereUniqueInput
  }

  /**
   * IvacPanelCode findFirst
   */
  export type IvacPanelCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeInclude<ExtArgs> | null
    /**
     * Filter, which IvacPanelCode to fetch.
     */
    where?: IvacPanelCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IvacPanelCodes to fetch.
     */
    orderBy?: IvacPanelCodeOrderByWithRelationInput | IvacPanelCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IvacPanelCodes.
     */
    cursor?: IvacPanelCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IvacPanelCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IvacPanelCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IvacPanelCodes.
     */
    distinct?: IvacPanelCodeScalarFieldEnum | IvacPanelCodeScalarFieldEnum[]
  }

  /**
   * IvacPanelCode findFirstOrThrow
   */
  export type IvacPanelCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeInclude<ExtArgs> | null
    /**
     * Filter, which IvacPanelCode to fetch.
     */
    where?: IvacPanelCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IvacPanelCodes to fetch.
     */
    orderBy?: IvacPanelCodeOrderByWithRelationInput | IvacPanelCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IvacPanelCodes.
     */
    cursor?: IvacPanelCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IvacPanelCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IvacPanelCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IvacPanelCodes.
     */
    distinct?: IvacPanelCodeScalarFieldEnum | IvacPanelCodeScalarFieldEnum[]
  }

  /**
   * IvacPanelCode findMany
   */
  export type IvacPanelCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeInclude<ExtArgs> | null
    /**
     * Filter, which IvacPanelCodes to fetch.
     */
    where?: IvacPanelCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IvacPanelCodes to fetch.
     */
    orderBy?: IvacPanelCodeOrderByWithRelationInput | IvacPanelCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IvacPanelCodes.
     */
    cursor?: IvacPanelCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IvacPanelCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IvacPanelCodes.
     */
    skip?: number
    distinct?: IvacPanelCodeScalarFieldEnum | IvacPanelCodeScalarFieldEnum[]
  }

  /**
   * IvacPanelCode create
   */
  export type IvacPanelCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a IvacPanelCode.
     */
    data: XOR<IvacPanelCodeCreateInput, IvacPanelCodeUncheckedCreateInput>
  }

  /**
   * IvacPanelCode createMany
   */
  export type IvacPanelCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IvacPanelCodes.
     */
    data: IvacPanelCodeCreateManyInput | IvacPanelCodeCreateManyInput[]
  }

  /**
   * IvacPanelCode createManyAndReturn
   */
  export type IvacPanelCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * The data used to create many IvacPanelCodes.
     */
    data: IvacPanelCodeCreateManyInput | IvacPanelCodeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IvacPanelCode update
   */
  export type IvacPanelCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a IvacPanelCode.
     */
    data: XOR<IvacPanelCodeUpdateInput, IvacPanelCodeUncheckedUpdateInput>
    /**
     * Choose, which IvacPanelCode to update.
     */
    where: IvacPanelCodeWhereUniqueInput
  }

  /**
   * IvacPanelCode updateMany
   */
  export type IvacPanelCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IvacPanelCodes.
     */
    data: XOR<IvacPanelCodeUpdateManyMutationInput, IvacPanelCodeUncheckedUpdateManyInput>
    /**
     * Filter which IvacPanelCodes to update
     */
    where?: IvacPanelCodeWhereInput
    /**
     * Limit how many IvacPanelCodes to update.
     */
    limit?: number
  }

  /**
   * IvacPanelCode updateManyAndReturn
   */
  export type IvacPanelCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * The data used to update IvacPanelCodes.
     */
    data: XOR<IvacPanelCodeUpdateManyMutationInput, IvacPanelCodeUncheckedUpdateManyInput>
    /**
     * Filter which IvacPanelCodes to update
     */
    where?: IvacPanelCodeWhereInput
    /**
     * Limit how many IvacPanelCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IvacPanelCode upsert
   */
  export type IvacPanelCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the IvacPanelCode to update in case it exists.
     */
    where: IvacPanelCodeWhereUniqueInput
    /**
     * In case the IvacPanelCode found by the `where` argument doesn't exist, create a new IvacPanelCode with this data.
     */
    create: XOR<IvacPanelCodeCreateInput, IvacPanelCodeUncheckedCreateInput>
    /**
     * In case the IvacPanelCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IvacPanelCodeUpdateInput, IvacPanelCodeUncheckedUpdateInput>
  }

  /**
   * IvacPanelCode delete
   */
  export type IvacPanelCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeInclude<ExtArgs> | null
    /**
     * Filter which IvacPanelCode to delete.
     */
    where: IvacPanelCodeWhereUniqueInput
  }

  /**
   * IvacPanelCode deleteMany
   */
  export type IvacPanelCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IvacPanelCodes to delete
     */
    where?: IvacPanelCodeWhereInput
    /**
     * Limit how many IvacPanelCodes to delete.
     */
    limit?: number
  }

  /**
   * IvacPanelCode.user
   */
  export type IvacPanelCode$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * IvacPanelCode without action
   */
  export type IvacPanelCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacPanelCode
     */
    select?: IvacPanelCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacPanelCode
     */
    omit?: IvacPanelCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IvacPanelCodeInclude<ExtArgs> | null
  }


  /**
   * Model IvacCustomer
   */

  export type AggregateIvacCustomer = {
    _count: IvacCustomerCountAggregateOutputType | null
    _avg: IvacCustomerAvgAggregateOutputType | null
    _sum: IvacCustomerSumAggregateOutputType | null
    _min: IvacCustomerMinAggregateOutputType | null
    _max: IvacCustomerMaxAggregateOutputType | null
  }

  export type IvacCustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type IvacCustomerSumAggregateOutputType = {
    id: number | null
  }

  export type IvacCustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    mobile: string | null
    address: string | null
    status: string | null
    deviceId: string | null
    deviceType: string | null
    userAgent: string | null
    ipAddress: string | null
    browser: string | null
    os: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IvacCustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    mobile: string | null
    address: string | null
    status: string | null
    deviceId: string | null
    deviceType: string | null
    userAgent: string | null
    ipAddress: string | null
    browser: string | null
    os: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IvacCustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    mobile: number
    address: number
    status: number
    deviceId: number
    deviceType: number
    userAgent: number
    ipAddress: number
    browser: number
    os: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IvacCustomerAvgAggregateInputType = {
    id?: true
  }

  export type IvacCustomerSumAggregateInputType = {
    id?: true
  }

  export type IvacCustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    mobile?: true
    address?: true
    status?: true
    deviceId?: true
    deviceType?: true
    userAgent?: true
    ipAddress?: true
    browser?: true
    os?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IvacCustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    mobile?: true
    address?: true
    status?: true
    deviceId?: true
    deviceType?: true
    userAgent?: true
    ipAddress?: true
    browser?: true
    os?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IvacCustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    mobile?: true
    address?: true
    status?: true
    deviceId?: true
    deviceType?: true
    userAgent?: true
    ipAddress?: true
    browser?: true
    os?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IvacCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IvacCustomer to aggregate.
     */
    where?: IvacCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IvacCustomers to fetch.
     */
    orderBy?: IvacCustomerOrderByWithRelationInput | IvacCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IvacCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IvacCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IvacCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IvacCustomers
    **/
    _count?: true | IvacCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IvacCustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IvacCustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IvacCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IvacCustomerMaxAggregateInputType
  }

  export type GetIvacCustomerAggregateType<T extends IvacCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateIvacCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIvacCustomer[P]>
      : GetScalarType<T[P], AggregateIvacCustomer[P]>
  }




  export type IvacCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IvacCustomerWhereInput
    orderBy?: IvacCustomerOrderByWithAggregationInput | IvacCustomerOrderByWithAggregationInput[]
    by: IvacCustomerScalarFieldEnum[] | IvacCustomerScalarFieldEnum
    having?: IvacCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IvacCustomerCountAggregateInputType | true
    _avg?: IvacCustomerAvgAggregateInputType
    _sum?: IvacCustomerSumAggregateInputType
    _min?: IvacCustomerMinAggregateInputType
    _max?: IvacCustomerMaxAggregateInputType
  }

  export type IvacCustomerGroupByOutputType = {
    id: number
    name: string
    email: string
    mobile: string | null
    address: string | null
    status: string
    deviceId: string | null
    deviceType: string | null
    userAgent: string | null
    ipAddress: string | null
    browser: string | null
    os: string | null
    country: string | null
    createdAt: Date
    updatedAt: Date
    _count: IvacCustomerCountAggregateOutputType | null
    _avg: IvacCustomerAvgAggregateOutputType | null
    _sum: IvacCustomerSumAggregateOutputType | null
    _min: IvacCustomerMinAggregateOutputType | null
    _max: IvacCustomerMaxAggregateOutputType | null
  }

  type GetIvacCustomerGroupByPayload<T extends IvacCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IvacCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IvacCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IvacCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], IvacCustomerGroupByOutputType[P]>
        }
      >
    >


  export type IvacCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    mobile?: boolean
    address?: boolean
    status?: boolean
    deviceId?: boolean
    deviceType?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    browser?: boolean
    os?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ivacCustomer"]>

  export type IvacCustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    mobile?: boolean
    address?: boolean
    status?: boolean
    deviceId?: boolean
    deviceType?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    browser?: boolean
    os?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ivacCustomer"]>

  export type IvacCustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    mobile?: boolean
    address?: boolean
    status?: boolean
    deviceId?: boolean
    deviceType?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    browser?: boolean
    os?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ivacCustomer"]>

  export type IvacCustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    mobile?: boolean
    address?: boolean
    status?: boolean
    deviceId?: boolean
    deviceType?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    browser?: boolean
    os?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IvacCustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "mobile" | "address" | "status" | "deviceId" | "deviceType" | "userAgent" | "ipAddress" | "browser" | "os" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["ivacCustomer"]>

  export type $IvacCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IvacCustomer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      mobile: string | null
      address: string | null
      status: string
      deviceId: string | null
      deviceType: string | null
      userAgent: string | null
      ipAddress: string | null
      browser: string | null
      os: string | null
      country: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ivacCustomer"]>
    composites: {}
  }

  type IvacCustomerGetPayload<S extends boolean | null | undefined | IvacCustomerDefaultArgs> = $Result.GetResult<Prisma.$IvacCustomerPayload, S>

  type IvacCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IvacCustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IvacCustomerCountAggregateInputType | true
    }

  export interface IvacCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IvacCustomer'], meta: { name: 'IvacCustomer' } }
    /**
     * Find zero or one IvacCustomer that matches the filter.
     * @param {IvacCustomerFindUniqueArgs} args - Arguments to find a IvacCustomer
     * @example
     * // Get one IvacCustomer
     * const ivacCustomer = await prisma.ivacCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IvacCustomerFindUniqueArgs>(args: SelectSubset<T, IvacCustomerFindUniqueArgs<ExtArgs>>): Prisma__IvacCustomerClient<$Result.GetResult<Prisma.$IvacCustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IvacCustomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IvacCustomerFindUniqueOrThrowArgs} args - Arguments to find a IvacCustomer
     * @example
     * // Get one IvacCustomer
     * const ivacCustomer = await prisma.ivacCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IvacCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, IvacCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IvacCustomerClient<$Result.GetResult<Prisma.$IvacCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IvacCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacCustomerFindFirstArgs} args - Arguments to find a IvacCustomer
     * @example
     * // Get one IvacCustomer
     * const ivacCustomer = await prisma.ivacCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IvacCustomerFindFirstArgs>(args?: SelectSubset<T, IvacCustomerFindFirstArgs<ExtArgs>>): Prisma__IvacCustomerClient<$Result.GetResult<Prisma.$IvacCustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IvacCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacCustomerFindFirstOrThrowArgs} args - Arguments to find a IvacCustomer
     * @example
     * // Get one IvacCustomer
     * const ivacCustomer = await prisma.ivacCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IvacCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, IvacCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__IvacCustomerClient<$Result.GetResult<Prisma.$IvacCustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IvacCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IvacCustomers
     * const ivacCustomers = await prisma.ivacCustomer.findMany()
     * 
     * // Get first 10 IvacCustomers
     * const ivacCustomers = await prisma.ivacCustomer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ivacCustomerWithIdOnly = await prisma.ivacCustomer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IvacCustomerFindManyArgs>(args?: SelectSubset<T, IvacCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IvacCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IvacCustomer.
     * @param {IvacCustomerCreateArgs} args - Arguments to create a IvacCustomer.
     * @example
     * // Create one IvacCustomer
     * const IvacCustomer = await prisma.ivacCustomer.create({
     *   data: {
     *     // ... data to create a IvacCustomer
     *   }
     * })
     * 
     */
    create<T extends IvacCustomerCreateArgs>(args: SelectSubset<T, IvacCustomerCreateArgs<ExtArgs>>): Prisma__IvacCustomerClient<$Result.GetResult<Prisma.$IvacCustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IvacCustomers.
     * @param {IvacCustomerCreateManyArgs} args - Arguments to create many IvacCustomers.
     * @example
     * // Create many IvacCustomers
     * const ivacCustomer = await prisma.ivacCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IvacCustomerCreateManyArgs>(args?: SelectSubset<T, IvacCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IvacCustomers and returns the data saved in the database.
     * @param {IvacCustomerCreateManyAndReturnArgs} args - Arguments to create many IvacCustomers.
     * @example
     * // Create many IvacCustomers
     * const ivacCustomer = await prisma.ivacCustomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IvacCustomers and only return the `id`
     * const ivacCustomerWithIdOnly = await prisma.ivacCustomer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IvacCustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, IvacCustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IvacCustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IvacCustomer.
     * @param {IvacCustomerDeleteArgs} args - Arguments to delete one IvacCustomer.
     * @example
     * // Delete one IvacCustomer
     * const IvacCustomer = await prisma.ivacCustomer.delete({
     *   where: {
     *     // ... filter to delete one IvacCustomer
     *   }
     * })
     * 
     */
    delete<T extends IvacCustomerDeleteArgs>(args: SelectSubset<T, IvacCustomerDeleteArgs<ExtArgs>>): Prisma__IvacCustomerClient<$Result.GetResult<Prisma.$IvacCustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IvacCustomer.
     * @param {IvacCustomerUpdateArgs} args - Arguments to update one IvacCustomer.
     * @example
     * // Update one IvacCustomer
     * const ivacCustomer = await prisma.ivacCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IvacCustomerUpdateArgs>(args: SelectSubset<T, IvacCustomerUpdateArgs<ExtArgs>>): Prisma__IvacCustomerClient<$Result.GetResult<Prisma.$IvacCustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IvacCustomers.
     * @param {IvacCustomerDeleteManyArgs} args - Arguments to filter IvacCustomers to delete.
     * @example
     * // Delete a few IvacCustomers
     * const { count } = await prisma.ivacCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IvacCustomerDeleteManyArgs>(args?: SelectSubset<T, IvacCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IvacCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IvacCustomers
     * const ivacCustomer = await prisma.ivacCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IvacCustomerUpdateManyArgs>(args: SelectSubset<T, IvacCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IvacCustomers and returns the data updated in the database.
     * @param {IvacCustomerUpdateManyAndReturnArgs} args - Arguments to update many IvacCustomers.
     * @example
     * // Update many IvacCustomers
     * const ivacCustomer = await prisma.ivacCustomer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IvacCustomers and only return the `id`
     * const ivacCustomerWithIdOnly = await prisma.ivacCustomer.updateManyAndReturn({
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
    updateManyAndReturn<T extends IvacCustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, IvacCustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IvacCustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IvacCustomer.
     * @param {IvacCustomerUpsertArgs} args - Arguments to update or create a IvacCustomer.
     * @example
     * // Update or create a IvacCustomer
     * const ivacCustomer = await prisma.ivacCustomer.upsert({
     *   create: {
     *     // ... data to create a IvacCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IvacCustomer we want to update
     *   }
     * })
     */
    upsert<T extends IvacCustomerUpsertArgs>(args: SelectSubset<T, IvacCustomerUpsertArgs<ExtArgs>>): Prisma__IvacCustomerClient<$Result.GetResult<Prisma.$IvacCustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IvacCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacCustomerCountArgs} args - Arguments to filter IvacCustomers to count.
     * @example
     * // Count the number of IvacCustomers
     * const count = await prisma.ivacCustomer.count({
     *   where: {
     *     // ... the filter for the IvacCustomers we want to count
     *   }
     * })
    **/
    count<T extends IvacCustomerCountArgs>(
      args?: Subset<T, IvacCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IvacCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IvacCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IvacCustomerAggregateArgs>(args: Subset<T, IvacCustomerAggregateArgs>): Prisma.PrismaPromise<GetIvacCustomerAggregateType<T>>

    /**
     * Group by IvacCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IvacCustomerGroupByArgs} args - Group by arguments.
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
      T extends IvacCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IvacCustomerGroupByArgs['orderBy'] }
        : { orderBy?: IvacCustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IvacCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIvacCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IvacCustomer model
   */
  readonly fields: IvacCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IvacCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IvacCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IvacCustomer model
   */
  interface IvacCustomerFieldRefs {
    readonly id: FieldRef<"IvacCustomer", 'Int'>
    readonly name: FieldRef<"IvacCustomer", 'String'>
    readonly email: FieldRef<"IvacCustomer", 'String'>
    readonly mobile: FieldRef<"IvacCustomer", 'String'>
    readonly address: FieldRef<"IvacCustomer", 'String'>
    readonly status: FieldRef<"IvacCustomer", 'String'>
    readonly deviceId: FieldRef<"IvacCustomer", 'String'>
    readonly deviceType: FieldRef<"IvacCustomer", 'String'>
    readonly userAgent: FieldRef<"IvacCustomer", 'String'>
    readonly ipAddress: FieldRef<"IvacCustomer", 'String'>
    readonly browser: FieldRef<"IvacCustomer", 'String'>
    readonly os: FieldRef<"IvacCustomer", 'String'>
    readonly country: FieldRef<"IvacCustomer", 'String'>
    readonly createdAt: FieldRef<"IvacCustomer", 'DateTime'>
    readonly updatedAt: FieldRef<"IvacCustomer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IvacCustomer findUnique
   */
  export type IvacCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacCustomer
     */
    select?: IvacCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacCustomer
     */
    omit?: IvacCustomerOmit<ExtArgs> | null
    /**
     * Filter, which IvacCustomer to fetch.
     */
    where: IvacCustomerWhereUniqueInput
  }

  /**
   * IvacCustomer findUniqueOrThrow
   */
  export type IvacCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacCustomer
     */
    select?: IvacCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacCustomer
     */
    omit?: IvacCustomerOmit<ExtArgs> | null
    /**
     * Filter, which IvacCustomer to fetch.
     */
    where: IvacCustomerWhereUniqueInput
  }

  /**
   * IvacCustomer findFirst
   */
  export type IvacCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacCustomer
     */
    select?: IvacCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacCustomer
     */
    omit?: IvacCustomerOmit<ExtArgs> | null
    /**
     * Filter, which IvacCustomer to fetch.
     */
    where?: IvacCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IvacCustomers to fetch.
     */
    orderBy?: IvacCustomerOrderByWithRelationInput | IvacCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IvacCustomers.
     */
    cursor?: IvacCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IvacCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IvacCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IvacCustomers.
     */
    distinct?: IvacCustomerScalarFieldEnum | IvacCustomerScalarFieldEnum[]
  }

  /**
   * IvacCustomer findFirstOrThrow
   */
  export type IvacCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacCustomer
     */
    select?: IvacCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacCustomer
     */
    omit?: IvacCustomerOmit<ExtArgs> | null
    /**
     * Filter, which IvacCustomer to fetch.
     */
    where?: IvacCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IvacCustomers to fetch.
     */
    orderBy?: IvacCustomerOrderByWithRelationInput | IvacCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IvacCustomers.
     */
    cursor?: IvacCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IvacCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IvacCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IvacCustomers.
     */
    distinct?: IvacCustomerScalarFieldEnum | IvacCustomerScalarFieldEnum[]
  }

  /**
   * IvacCustomer findMany
   */
  export type IvacCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacCustomer
     */
    select?: IvacCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacCustomer
     */
    omit?: IvacCustomerOmit<ExtArgs> | null
    /**
     * Filter, which IvacCustomers to fetch.
     */
    where?: IvacCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IvacCustomers to fetch.
     */
    orderBy?: IvacCustomerOrderByWithRelationInput | IvacCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IvacCustomers.
     */
    cursor?: IvacCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IvacCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IvacCustomers.
     */
    skip?: number
    distinct?: IvacCustomerScalarFieldEnum | IvacCustomerScalarFieldEnum[]
  }

  /**
   * IvacCustomer create
   */
  export type IvacCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacCustomer
     */
    select?: IvacCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacCustomer
     */
    omit?: IvacCustomerOmit<ExtArgs> | null
    /**
     * The data needed to create a IvacCustomer.
     */
    data: XOR<IvacCustomerCreateInput, IvacCustomerUncheckedCreateInput>
  }

  /**
   * IvacCustomer createMany
   */
  export type IvacCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IvacCustomers.
     */
    data: IvacCustomerCreateManyInput | IvacCustomerCreateManyInput[]
  }

  /**
   * IvacCustomer createManyAndReturn
   */
  export type IvacCustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacCustomer
     */
    select?: IvacCustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IvacCustomer
     */
    omit?: IvacCustomerOmit<ExtArgs> | null
    /**
     * The data used to create many IvacCustomers.
     */
    data: IvacCustomerCreateManyInput | IvacCustomerCreateManyInput[]
  }

  /**
   * IvacCustomer update
   */
  export type IvacCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacCustomer
     */
    select?: IvacCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacCustomer
     */
    omit?: IvacCustomerOmit<ExtArgs> | null
    /**
     * The data needed to update a IvacCustomer.
     */
    data: XOR<IvacCustomerUpdateInput, IvacCustomerUncheckedUpdateInput>
    /**
     * Choose, which IvacCustomer to update.
     */
    where: IvacCustomerWhereUniqueInput
  }

  /**
   * IvacCustomer updateMany
   */
  export type IvacCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IvacCustomers.
     */
    data: XOR<IvacCustomerUpdateManyMutationInput, IvacCustomerUncheckedUpdateManyInput>
    /**
     * Filter which IvacCustomers to update
     */
    where?: IvacCustomerWhereInput
    /**
     * Limit how many IvacCustomers to update.
     */
    limit?: number
  }

  /**
   * IvacCustomer updateManyAndReturn
   */
  export type IvacCustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacCustomer
     */
    select?: IvacCustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IvacCustomer
     */
    omit?: IvacCustomerOmit<ExtArgs> | null
    /**
     * The data used to update IvacCustomers.
     */
    data: XOR<IvacCustomerUpdateManyMutationInput, IvacCustomerUncheckedUpdateManyInput>
    /**
     * Filter which IvacCustomers to update
     */
    where?: IvacCustomerWhereInput
    /**
     * Limit how many IvacCustomers to update.
     */
    limit?: number
  }

  /**
   * IvacCustomer upsert
   */
  export type IvacCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacCustomer
     */
    select?: IvacCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacCustomer
     */
    omit?: IvacCustomerOmit<ExtArgs> | null
    /**
     * The filter to search for the IvacCustomer to update in case it exists.
     */
    where: IvacCustomerWhereUniqueInput
    /**
     * In case the IvacCustomer found by the `where` argument doesn't exist, create a new IvacCustomer with this data.
     */
    create: XOR<IvacCustomerCreateInput, IvacCustomerUncheckedCreateInput>
    /**
     * In case the IvacCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IvacCustomerUpdateInput, IvacCustomerUncheckedUpdateInput>
  }

  /**
   * IvacCustomer delete
   */
  export type IvacCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacCustomer
     */
    select?: IvacCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacCustomer
     */
    omit?: IvacCustomerOmit<ExtArgs> | null
    /**
     * Filter which IvacCustomer to delete.
     */
    where: IvacCustomerWhereUniqueInput
  }

  /**
   * IvacCustomer deleteMany
   */
  export type IvacCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IvacCustomers to delete
     */
    where?: IvacCustomerWhereInput
    /**
     * Limit how many IvacCustomers to delete.
     */
    limit?: number
  }

  /**
   * IvacCustomer without action
   */
  export type IvacCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IvacCustomer
     */
    select?: IvacCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IvacCustomer
     */
    omit?: IvacCustomerOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    mobile: 'mobile',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IvacPanelCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    obsfucatedCode: 'obsfucatedCode',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IvacPanelCodeScalarFieldEnum = (typeof IvacPanelCodeScalarFieldEnum)[keyof typeof IvacPanelCodeScalarFieldEnum]


  export const IvacCustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    mobile: 'mobile',
    address: 'address',
    status: 'status',
    deviceId: 'deviceId',
    deviceType: 'deviceType',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    browser: 'browser',
    os: 'os',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IvacCustomerScalarFieldEnum = (typeof IvacCustomerScalarFieldEnum)[keyof typeof IvacCustomerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    mobile?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    codes?: IvacPanelCodeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mobile?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    codes?: IvacPanelCodeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    mobile?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    codes?: IvacPanelCodeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mobile?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type IvacPanelCodeWhereInput = {
    AND?: IvacPanelCodeWhereInput | IvacPanelCodeWhereInput[]
    OR?: IvacPanelCodeWhereInput[]
    NOT?: IvacPanelCodeWhereInput | IvacPanelCodeWhereInput[]
    id?: IntFilter<"IvacPanelCode"> | number
    code?: StringFilter<"IvacPanelCode"> | string
    obsfucatedCode?: StringFilter<"IvacPanelCode"> | string
    userId?: IntNullableFilter<"IvacPanelCode"> | number | null
    createdAt?: DateTimeFilter<"IvacPanelCode"> | Date | string
    updatedAt?: DateTimeFilter<"IvacPanelCode"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type IvacPanelCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    obsfucatedCode?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IvacPanelCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IvacPanelCodeWhereInput | IvacPanelCodeWhereInput[]
    OR?: IvacPanelCodeWhereInput[]
    NOT?: IvacPanelCodeWhereInput | IvacPanelCodeWhereInput[]
    code?: StringFilter<"IvacPanelCode"> | string
    obsfucatedCode?: StringFilter<"IvacPanelCode"> | string
    userId?: IntNullableFilter<"IvacPanelCode"> | number | null
    createdAt?: DateTimeFilter<"IvacPanelCode"> | Date | string
    updatedAt?: DateTimeFilter<"IvacPanelCode"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type IvacPanelCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    obsfucatedCode?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IvacPanelCodeCountOrderByAggregateInput
    _avg?: IvacPanelCodeAvgOrderByAggregateInput
    _max?: IvacPanelCodeMaxOrderByAggregateInput
    _min?: IvacPanelCodeMinOrderByAggregateInput
    _sum?: IvacPanelCodeSumOrderByAggregateInput
  }

  export type IvacPanelCodeScalarWhereWithAggregatesInput = {
    AND?: IvacPanelCodeScalarWhereWithAggregatesInput | IvacPanelCodeScalarWhereWithAggregatesInput[]
    OR?: IvacPanelCodeScalarWhereWithAggregatesInput[]
    NOT?: IvacPanelCodeScalarWhereWithAggregatesInput | IvacPanelCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IvacPanelCode"> | number
    code?: StringWithAggregatesFilter<"IvacPanelCode"> | string
    obsfucatedCode?: StringWithAggregatesFilter<"IvacPanelCode"> | string
    userId?: IntNullableWithAggregatesFilter<"IvacPanelCode"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"IvacPanelCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IvacPanelCode"> | Date | string
  }

  export type IvacCustomerWhereInput = {
    AND?: IvacCustomerWhereInput | IvacCustomerWhereInput[]
    OR?: IvacCustomerWhereInput[]
    NOT?: IvacCustomerWhereInput | IvacCustomerWhereInput[]
    id?: IntFilter<"IvacCustomer"> | number
    name?: StringFilter<"IvacCustomer"> | string
    email?: StringFilter<"IvacCustomer"> | string
    mobile?: StringNullableFilter<"IvacCustomer"> | string | null
    address?: StringNullableFilter<"IvacCustomer"> | string | null
    status?: StringFilter<"IvacCustomer"> | string
    deviceId?: StringNullableFilter<"IvacCustomer"> | string | null
    deviceType?: StringNullableFilter<"IvacCustomer"> | string | null
    userAgent?: StringNullableFilter<"IvacCustomer"> | string | null
    ipAddress?: StringNullableFilter<"IvacCustomer"> | string | null
    browser?: StringNullableFilter<"IvacCustomer"> | string | null
    os?: StringNullableFilter<"IvacCustomer"> | string | null
    country?: StringNullableFilter<"IvacCustomer"> | string | null
    createdAt?: DateTimeFilter<"IvacCustomer"> | Date | string
    updatedAt?: DateTimeFilter<"IvacCustomer"> | Date | string
  }

  export type IvacCustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    status?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IvacCustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: IvacCustomerWhereInput | IvacCustomerWhereInput[]
    OR?: IvacCustomerWhereInput[]
    NOT?: IvacCustomerWhereInput | IvacCustomerWhereInput[]
    name?: StringFilter<"IvacCustomer"> | string
    mobile?: StringNullableFilter<"IvacCustomer"> | string | null
    address?: StringNullableFilter<"IvacCustomer"> | string | null
    status?: StringFilter<"IvacCustomer"> | string
    deviceId?: StringNullableFilter<"IvacCustomer"> | string | null
    deviceType?: StringNullableFilter<"IvacCustomer"> | string | null
    userAgent?: StringNullableFilter<"IvacCustomer"> | string | null
    ipAddress?: StringNullableFilter<"IvacCustomer"> | string | null
    browser?: StringNullableFilter<"IvacCustomer"> | string | null
    os?: StringNullableFilter<"IvacCustomer"> | string | null
    country?: StringNullableFilter<"IvacCustomer"> | string | null
    createdAt?: DateTimeFilter<"IvacCustomer"> | Date | string
    updatedAt?: DateTimeFilter<"IvacCustomer"> | Date | string
  }, "id" | "email">

  export type IvacCustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    status?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IvacCustomerCountOrderByAggregateInput
    _avg?: IvacCustomerAvgOrderByAggregateInput
    _max?: IvacCustomerMaxOrderByAggregateInput
    _min?: IvacCustomerMinOrderByAggregateInput
    _sum?: IvacCustomerSumOrderByAggregateInput
  }

  export type IvacCustomerScalarWhereWithAggregatesInput = {
    AND?: IvacCustomerScalarWhereWithAggregatesInput | IvacCustomerScalarWhereWithAggregatesInput[]
    OR?: IvacCustomerScalarWhereWithAggregatesInput[]
    NOT?: IvacCustomerScalarWhereWithAggregatesInput | IvacCustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IvacCustomer"> | number
    name?: StringWithAggregatesFilter<"IvacCustomer"> | string
    email?: StringWithAggregatesFilter<"IvacCustomer"> | string
    mobile?: StringNullableWithAggregatesFilter<"IvacCustomer"> | string | null
    address?: StringNullableWithAggregatesFilter<"IvacCustomer"> | string | null
    status?: StringWithAggregatesFilter<"IvacCustomer"> | string
    deviceId?: StringNullableWithAggregatesFilter<"IvacCustomer"> | string | null
    deviceType?: StringNullableWithAggregatesFilter<"IvacCustomer"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"IvacCustomer"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"IvacCustomer"> | string | null
    browser?: StringNullableWithAggregatesFilter<"IvacCustomer"> | string | null
    os?: StringNullableWithAggregatesFilter<"IvacCustomer"> | string | null
    country?: StringNullableWithAggregatesFilter<"IvacCustomer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IvacCustomer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IvacCustomer"> | Date | string
  }

  export type UserCreateInput = {
    name?: string | null
    email: string
    password: string
    role?: string
    mobile?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codes?: IvacPanelCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: string
    mobile?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codes?: IvacPanelCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codes?: IvacPanelCodeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codes?: IvacPanelCodeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: string
    mobile?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IvacPanelCodeCreateInput = {
    code: string
    obsfucatedCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCodesInput
  }

  export type IvacPanelCodeUncheckedCreateInput = {
    id?: number
    code: string
    obsfucatedCode: string
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IvacPanelCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    obsfucatedCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCodesNestedInput
  }

  export type IvacPanelCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    obsfucatedCode?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IvacPanelCodeCreateManyInput = {
    id?: number
    code: string
    obsfucatedCode: string
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IvacPanelCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    obsfucatedCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IvacPanelCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    obsfucatedCode?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IvacCustomerCreateInput = {
    name: string
    email: string
    mobile?: string | null
    address?: string | null
    status?: string
    deviceId?: string | null
    deviceType?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    browser?: string | null
    os?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IvacCustomerUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    mobile?: string | null
    address?: string | null
    status?: string
    deviceId?: string | null
    deviceType?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    browser?: string | null
    os?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IvacCustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IvacCustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IvacCustomerCreateManyInput = {
    id?: number
    name: string
    email: string
    mobile?: string | null
    address?: string | null
    status?: string
    deviceId?: string | null
    deviceType?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    browser?: string | null
    os?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IvacCustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IvacCustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IvacPanelCodeListRelationFilter = {
    every?: IvacPanelCodeWhereInput
    some?: IvacPanelCodeWhereInput
    none?: IvacPanelCodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IvacPanelCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type IvacPanelCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    obsfucatedCode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IvacPanelCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IvacPanelCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    obsfucatedCode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IvacPanelCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    obsfucatedCode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IvacPanelCodeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type IvacCustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    status?: SortOrder
    deviceId?: SortOrder
    deviceType?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IvacCustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IvacCustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    status?: SortOrder
    deviceId?: SortOrder
    deviceType?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IvacCustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    address?: SortOrder
    status?: SortOrder
    deviceId?: SortOrder
    deviceType?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IvacCustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IvacPanelCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<IvacPanelCodeCreateWithoutUserInput, IvacPanelCodeUncheckedCreateWithoutUserInput> | IvacPanelCodeCreateWithoutUserInput[] | IvacPanelCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IvacPanelCodeCreateOrConnectWithoutUserInput | IvacPanelCodeCreateOrConnectWithoutUserInput[]
    createMany?: IvacPanelCodeCreateManyUserInputEnvelope
    connect?: IvacPanelCodeWhereUniqueInput | IvacPanelCodeWhereUniqueInput[]
  }

  export type IvacPanelCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IvacPanelCodeCreateWithoutUserInput, IvacPanelCodeUncheckedCreateWithoutUserInput> | IvacPanelCodeCreateWithoutUserInput[] | IvacPanelCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IvacPanelCodeCreateOrConnectWithoutUserInput | IvacPanelCodeCreateOrConnectWithoutUserInput[]
    createMany?: IvacPanelCodeCreateManyUserInputEnvelope
    connect?: IvacPanelCodeWhereUniqueInput | IvacPanelCodeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IvacPanelCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<IvacPanelCodeCreateWithoutUserInput, IvacPanelCodeUncheckedCreateWithoutUserInput> | IvacPanelCodeCreateWithoutUserInput[] | IvacPanelCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IvacPanelCodeCreateOrConnectWithoutUserInput | IvacPanelCodeCreateOrConnectWithoutUserInput[]
    upsert?: IvacPanelCodeUpsertWithWhereUniqueWithoutUserInput | IvacPanelCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IvacPanelCodeCreateManyUserInputEnvelope
    set?: IvacPanelCodeWhereUniqueInput | IvacPanelCodeWhereUniqueInput[]
    disconnect?: IvacPanelCodeWhereUniqueInput | IvacPanelCodeWhereUniqueInput[]
    delete?: IvacPanelCodeWhereUniqueInput | IvacPanelCodeWhereUniqueInput[]
    connect?: IvacPanelCodeWhereUniqueInput | IvacPanelCodeWhereUniqueInput[]
    update?: IvacPanelCodeUpdateWithWhereUniqueWithoutUserInput | IvacPanelCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IvacPanelCodeUpdateManyWithWhereWithoutUserInput | IvacPanelCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IvacPanelCodeScalarWhereInput | IvacPanelCodeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IvacPanelCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IvacPanelCodeCreateWithoutUserInput, IvacPanelCodeUncheckedCreateWithoutUserInput> | IvacPanelCodeCreateWithoutUserInput[] | IvacPanelCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IvacPanelCodeCreateOrConnectWithoutUserInput | IvacPanelCodeCreateOrConnectWithoutUserInput[]
    upsert?: IvacPanelCodeUpsertWithWhereUniqueWithoutUserInput | IvacPanelCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IvacPanelCodeCreateManyUserInputEnvelope
    set?: IvacPanelCodeWhereUniqueInput | IvacPanelCodeWhereUniqueInput[]
    disconnect?: IvacPanelCodeWhereUniqueInput | IvacPanelCodeWhereUniqueInput[]
    delete?: IvacPanelCodeWhereUniqueInput | IvacPanelCodeWhereUniqueInput[]
    connect?: IvacPanelCodeWhereUniqueInput | IvacPanelCodeWhereUniqueInput[]
    update?: IvacPanelCodeUpdateWithWhereUniqueWithoutUserInput | IvacPanelCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IvacPanelCodeUpdateManyWithWhereWithoutUserInput | IvacPanelCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IvacPanelCodeScalarWhereInput | IvacPanelCodeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCodesInput = {
    create?: XOR<UserCreateWithoutCodesInput, UserUncheckedCreateWithoutCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutCodesNestedInput = {
    create?: XOR<UserCreateWithoutCodesInput, UserUncheckedCreateWithoutCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodesInput
    upsert?: UserUpsertWithoutCodesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCodesInput, UserUpdateWithoutCodesInput>, UserUncheckedUpdateWithoutCodesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IvacPanelCodeCreateWithoutUserInput = {
    code: string
    obsfucatedCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IvacPanelCodeUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    obsfucatedCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IvacPanelCodeCreateOrConnectWithoutUserInput = {
    where: IvacPanelCodeWhereUniqueInput
    create: XOR<IvacPanelCodeCreateWithoutUserInput, IvacPanelCodeUncheckedCreateWithoutUserInput>
  }

  export type IvacPanelCodeCreateManyUserInputEnvelope = {
    data: IvacPanelCodeCreateManyUserInput | IvacPanelCodeCreateManyUserInput[]
  }

  export type IvacPanelCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: IvacPanelCodeWhereUniqueInput
    update: XOR<IvacPanelCodeUpdateWithoutUserInput, IvacPanelCodeUncheckedUpdateWithoutUserInput>
    create: XOR<IvacPanelCodeCreateWithoutUserInput, IvacPanelCodeUncheckedCreateWithoutUserInput>
  }

  export type IvacPanelCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: IvacPanelCodeWhereUniqueInput
    data: XOR<IvacPanelCodeUpdateWithoutUserInput, IvacPanelCodeUncheckedUpdateWithoutUserInput>
  }

  export type IvacPanelCodeUpdateManyWithWhereWithoutUserInput = {
    where: IvacPanelCodeScalarWhereInput
    data: XOR<IvacPanelCodeUpdateManyMutationInput, IvacPanelCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type IvacPanelCodeScalarWhereInput = {
    AND?: IvacPanelCodeScalarWhereInput | IvacPanelCodeScalarWhereInput[]
    OR?: IvacPanelCodeScalarWhereInput[]
    NOT?: IvacPanelCodeScalarWhereInput | IvacPanelCodeScalarWhereInput[]
    id?: IntFilter<"IvacPanelCode"> | number
    code?: StringFilter<"IvacPanelCode"> | string
    obsfucatedCode?: StringFilter<"IvacPanelCode"> | string
    userId?: IntNullableFilter<"IvacPanelCode"> | number | null
    createdAt?: DateTimeFilter<"IvacPanelCode"> | Date | string
    updatedAt?: DateTimeFilter<"IvacPanelCode"> | Date | string
  }

  export type UserCreateWithoutCodesInput = {
    name?: string | null
    email: string
    password: string
    role?: string
    mobile?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCodesInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: string
    mobile?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCodesInput, UserUncheckedCreateWithoutCodesInput>
  }

  export type UserUpsertWithoutCodesInput = {
    update: XOR<UserUpdateWithoutCodesInput, UserUncheckedUpdateWithoutCodesInput>
    create: XOR<UserCreateWithoutCodesInput, UserUncheckedCreateWithoutCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCodesInput, UserUncheckedUpdateWithoutCodesInput>
  }

  export type UserUpdateWithoutCodesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IvacPanelCodeCreateManyUserInput = {
    id?: number
    code: string
    obsfucatedCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IvacPanelCodeUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    obsfucatedCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IvacPanelCodeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    obsfucatedCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IvacPanelCodeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    obsfucatedCode?: StringFieldUpdateOperationsInput | string
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