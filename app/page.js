'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import axios from 'axios';
import { Delete, Edit, PlusCircle, Trash2 } from 'lucide-react';
import React, { useEffect } from 'react'
import AddSkills from './modal/AddSkills';
import UpdateSkills from './modal/UpdateSkills';

const SkillsPage = () => {
    const [skills, setSkills] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const getSkills = async () => {
        setIsLoading(true);
        try {
        const url = process.env.NEXT_PUBLIC_API_URL + "admin.php";
        console.log("url", url);
        const formData = new FormData();
        formData.append("operation", "getLookUpTables")
        const res = await axios.post(url, formData);
        console.log("res", res.data.skills);
        if(res.data !== 0){
        setSkills(res.data.skills);
        }
        } catch (error) {
        toast.error("Network error");
        console.log(error);
        } finally {
        setIsLoading(false);
        }
    }
    useEffect(() => {
        getSkills();
    }, [])
    return (
        <div>
            <Card>
                <CardContent>
                    <CardHeader className="grid grid-cols-2">
                        <div>
                        <CardTitle className="text-5xl">Skills</CardTitle>
                        <CardDescription>Master file for Skills</CardDescription>
                        </div>
                        <div className="text-right">
                            <AddSkills/>
                        </div>
                    </CardHeader>
                <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Skill</TableHead>
                        <TableHead className="text-center">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {skills.map((element, index) => (
                        <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{element.perS_name}</TableCell>
                                <TableCell className="text-center">
                                    {/* <Button className="mb-2 mr-2 lg:mb-0">Update</Button> */}
                                <div className="flex justify-center">
                                <UpdateSkills skillId={element.perS_id} skillName={element.perS_name}/>
                                <Button variant="destructive">Delete</Button>
                                </div>
                                </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
                </CardContent>
            </Card>
        </div>
    )

}
export default SkillsPage
