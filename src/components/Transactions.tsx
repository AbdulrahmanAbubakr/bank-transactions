import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface transactionsData {
  amount: string;
  currency: string;
  cardholder: string;
  status: string;
  created: string;
}

function Transactions() {
  const [transaction, setTransaction] = useState<transactionsData[]>([]);

  useEffect(() => {
    const fetchTransaction = async () => {
      const res = await fetch("/transaction.json");
      const result = await res.json();
      setTransaction(result);
    };
    fetchTransaction();
  });

  return (
    <div className="table-data">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Amount</TableHead>
            <TableHead className="w-[100px]">Currency</TableHead>
            <TableHead className="w-[100px]">Cardholder</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="m-10">
          {transaction &&
            transaction.map((item) => (
              <TableRow>
                <TableCell className="text-center">{item.amount}</TableCell>
                <TableCell className="text-center">{item.currency}</TableCell>
                <TableCell className="font-medium">{item.cardholder}</TableCell>
                <Button variant={"outline"}>{item.status}</Button>
                <TableCell>{item.created}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Transactions;
