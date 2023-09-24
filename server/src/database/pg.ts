import {createConnection, Connection, Repository} from 'typeorm';
import {Merchant} from "./models/merchant";

class TypeORM {
    private static instance: TypeORM;
    private connection: Connection;

    private constructor() {
    }

    public static getInstance(): TypeORM {
        if (!TypeORM.instance) {
            TypeORM.instance = new TypeORM();
        }
        return TypeORM.instance;
    }

    public async initialize() {
        try {
            if (!this.connection) {
                this.connection = await createConnection({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: 'camaro98',
                    database: 'postgres',
                    synchronize: true,
                    logging: true,
                    entities: [Merchant],
                });

                console.log('Conexión a la base de datos Postgres establecida');
            }

            const merchantRepository: Repository<Merchant> = this.connection.getRepository(Merchant);
            const merchantsCount = await merchantRepository.count();

            if (merchantsCount === 0) {
                const newMerchant = merchantRepository.create({name: "pk_test_0ae8dW2FpEAZlxlz"});
                await merchantRepository.save(newMerchant); 
                console.log('Registro inicial de Merchant creado:', newMerchant);
            }
        } catch (error) {
            console.error('Error de conexión a la base de datos Postgres:', error);
            throw error;
        }
    }

    public getConnection(): Connection {
        if (!this.connection) {
            throw new Error('La conexión a la base de datos Postgres no se ha inicializado.');
        }
        return this.connection;
    }
}

export default TypeORM.getInstance();