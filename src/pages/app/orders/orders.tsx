import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Orders(){
    return(
        <>
            <Helmet title="Pedidos" />
            <div className="flex flex-col gap-4">
                <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight">Pedidos</h1>
            </div>
            <div className="space-y-2.5">
                <form className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Filtros:</span> 
                    <Input placeholder="Nome do cliente" className="h-8 w-[320px]"/>
                </form>

            <div className="rounded-md border">
                <Table >
                    <TableHeader >
                        <TableRow >
                            <TableHead className="w-[64px]"></TableHead>
                            <TableHead className="w-[140px]">Identificador</TableHead>
                            <TableHead className="w-[180px]">Realizado há</TableHead>
                            <TableHead className="w-[140px]">Status</TableHead>
                            <TableHead>Cliente</TableHead>
                            <TableHead className="w-[140px]">Total do pedido</TableHead>
                            <TableHead className="w-[164px]"></TableHead>
                            <TableHead className="w-[132px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Button variant='outline' size="xs">
                                    <Search className="h-3 w-3" />
                                    <span className="sr-only">Detalhes do pedido</span>
                                </Button>
                            </TableCell>
                            <TableCell className="font-mono text-xs font-medium">
                                243897r9w08fd
                            </TableCell>
                            <TableCell className="text-muted foreground">
                                há 15 minutos
                            </TableCell>
                            <TableCell >
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                    <span className="font-medium text-muted-foreground">Pendente</span>
                                </div>
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            </div>
        </>
    )
}