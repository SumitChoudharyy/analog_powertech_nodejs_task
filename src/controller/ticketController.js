import { Ticket } from "../models/ticket.models.js";

// Controller to Create a Ticket 
export const createTicket = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(500).json({
                success: false,
                message: 'Please title and description'
            })
        }

        const ticket = await Ticket.create({
            title,
            description
        })

        if (!ticket) {
            return res.status(500).json({
                success: false,
                message: 'Error Creating Ticket'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Ticket Created Successfully',
            data: ticket
        }
        )

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'User Does not Created',
        });
    }
}

// Controller to Get All the Ticket 
export const getAllTicket = async (req, res) => {
    try {
        const tickets = await Ticket.find();

        if (!tickets) {
            return res.status(500).json({
                success: false,
                message: 'Error Fetching Tickets'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Data Fetched Success',
            data: tickets
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error Fetching all ticket',
        });
    }
}

// Controller to get Single Ticket
export const getSingleTicket = async (req, res) => {
    try {
        const { ticketID } = req.params;

        const ticket = await Ticket.findById(ticketID);

        if (!ticket) {
            return res.status(500).json({
                success: false,
                message: `Error ticket ${ticketID}`
            })
        }

        return res.status(200).json({
            success: true,
            message: `Successfully Fetch data with id ${ticketID}`,
            data: ticket
        }
        )

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error fetching Data',
        });
    }
}

// Controller to Update ticket
export const updateTicket = async (req, res) => {
    try {
        const {ticketID} = req.params;
        const {title, description, status} = req.body;
      
        const ticket  = await Ticket.findById(ticketID);
        
        if(!ticket) {
            return res.status(500).json({
                success:false,
                message:"Ticket not found with this id"
            })
        }
      
        ticket.title = title || ticket.title;
        ticket.description = description || ticket.description;
        ticket.status = status || ticket.status;
      
        await ticket.save({validateBeforeSave: false});
      
        return res.status(200).json({
            success:true,
            message:"Ticket updated Successfully",
            data:ticket
        }
        )

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error Updating ticket',
        });
    }
}

// Controller to Delete Ticket
export const deleteTicket = async (req, res) => {
    try {
        const { ticketID } = req.params;

        const ticketDeleted = await Ticket.findByIdAndDelete(ticketID);

        if (!ticketDeleted) {
            return res.status(500).json({
                success:false,
                message:'Unable to Delete the ticket'
            })
        }

        return res.status(200).json({
            success:true,
            message:"Successfully Delete the ticket",
            data:ticketDeleted
        }
        )


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error Deleting ticket',
        });
    }
}