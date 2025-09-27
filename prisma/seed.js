const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Create a new user
    const user = await prisma.user.create({
        data: {
            email: 'nurhossainrepon7248@gmail.com',
            name: 'Nur Hossain Repon',
            password: '1111',
            mobile: '+8801829938427', // <-- fixed field name
            address: 'Dhaka, Bangladesh',
            role: 'admin', // <-- added role field
            image: '/person.svg' // <-- added image field
        },
    });
    console.log('Created user:', user);
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
