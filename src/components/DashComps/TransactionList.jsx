import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TransactionList() {
  const transactions = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
      avatar: "OM",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "+$39.00",
      avatar: "JL",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+$299.00",
      avatar: "IN",
    },
  ];

  return (
    <div className="space-y-8">
      {transactions.map((transaction, index) => (
        <div key={index} className="flex items-center text-white">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{transaction.avatar}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {transaction.name}
            </p>
            <p className="text-sm text-muted-foreground">{transaction.email}</p>
          </div>
          <div className="ml-auto font-medium">{transaction.amount}</div>
        </div>
      ))}
    </div>
  );
}
