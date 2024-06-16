import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function updatePasswords() {
  const users = await prisma.user.findMany();

  for (const user of users) {
    if (!user.password.startsWith('$2b$')) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      });
    }
  }

  console.log('Senhas atualizadas com sucesso');
  await prisma.$disconnect();
}

updatePasswords().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
