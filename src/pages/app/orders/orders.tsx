import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { OrderTableRow } from "./order-table-row";

export function Orders() {
    return (
      <>
        <Helmet title="Pedidos" />
        <div className="flex flex-col gap-4">
          <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight">Pedidos</h1>
        </div>
        <div className="space-y-2.5">
          <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
          </form>
  
          <div className="rounded-md border">
            {/* Adicionando table-fixed para garantir que a largura das colunas seja consistente */}
            <Table className="table-fixed">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px] pl-7">Identificador</TableHead>
                  <TableHead className="w-[180px] pl-12">Realizado há</TableHead>
                  <TableHead className="w-[140px] pl-6">Status</TableHead>
                  <TableHead className="w-[180px] pl-16">Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length:10 }).map((_, i) => {
                    return(
                        <OrderTableRow key={i}/>
                    )
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </>
    );
  }
  